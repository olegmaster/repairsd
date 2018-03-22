<?php
/*
	Plugin Name: MouseWheel Smooth Scroll
	Plugin URI: https://kubiq.sk
	Description: MouseWheel smooth scrolling for your WordPress website
	Version: 3.0
	Author: KubiQ
	Author URI: https://kubiq.sk
*/

if (!class_exists('wpmss')) {
	class wpmss {
		var $domain = 'wpmss';
		var $plugin_admin_page;
		var $settings;
		var $tab;
		
		function wpmss_func(){ $this->__construct(); }	
		
		function __construct(){
			$mo = plugin_dir_path(__FILE__) . 'languages/' . $this->domain . '-' . get_locale() . '.mo';
			load_textdomain($this->domain, $mo);
			add_action( 'admin_menu', array( &$this, 'plugin_menu_link' ) );
			add_action( 'init', array( &$this, "plugin_init" ) );
		}
		
		function filter_plugin_actions($links, $file) {
		   $settings_link = '<a href="options-general.php?page=' . basename(__FILE__) . '">' . __('Settings') . '</a>';
		   array_unshift( $links, $settings_link );
		   return $links;
		}
		
		function plugin_menu_link() {
			$this->plugin_admin_page = add_submenu_page(
				'options-general.php',
				__( 'Smooth Scroll', $this->domain ),
				__( 'Smooth Scroll', $this->domain ),
				'manage_options',
				basename(__FILE__),
				array( $this, 'admin_options_page' )
			);
			add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), array($this, 'filter_plugin_actions'), 10, 2 );
		}
		
		function plugin_init(){
			$this->settings = get_option('wpmss_settings');
			$this->settings['general']['frameRate'] = isset( $this->settings['general']['frameRate'] ) && trim( $this->settings['general']['frameRate'] ) ? intval( $this->settings['general']['frameRate'] ) : 150;
			$this->settings['general']['animationTime'] = isset( $this->settings['general']['animationTime'] ) && trim( $this->settings['general']['animationTime'] ) ? intval( $this->settings['general']['animationTime'] ) : 1000;
			$this->settings['general']['stepSize'] = isset( $this->settings['general']['stepSize'] ) && trim( $this->settings['general']['stepSize'] ) ? intval( $this->settings['general']['stepSize'] ) : 100;
			$this->settings['general']['pulseScale'] = isset( $this->settings['general']['pulseScale'] ) && trim( $this->settings['general']['pulseScale'] ) ? intval( $this->settings['general']['pulseScale'] ) : 4;
			$this->settings['general']['pulseNormalize'] = isset( $this->settings['general']['pulseNormalize'] ) && trim( $this->settings['general']['pulseNormalize'] ) ? intval( $this->settings['general']['pulseNormalize'] ) : 1;
			$this->settings['general']['accelerationDelta'] = isset( $this->settings['general']['accelerationDelta'] ) && trim( $this->settings['general']['accelerationDelta'] ) ? intval( $this->settings['general']['accelerationDelta'] ) : 50;
			$this->settings['general']['accelerationMax'] = isset( $this->settings['general']['accelerationMax'] ) && trim( $this->settings['general']['accelerationMax'] ) ? intval( $this->settings['general']['accelerationMax'] ) : 3;
			$this->settings['general']['arrowScroll'] = isset( $this->settings['general']['arrowScroll'] ) && trim( $this->settings['general']['arrowScroll'] ) ? intval( $this->settings['general']['arrowScroll'] ) : 50;
			add_action( 'wp_enqueue_scripts', array($this, 'plugin_scripts_load') );
		}

		function plugin_scripts_load() {
			$options = array(
				'frameRate' => $this->settings['general']['frameRate'],
				'animationTime' => $this->settings['general']['animationTime'],
				'stepSize' => $this->settings['general']['stepSize'],
				'pulseScale' => $this->settings['general']['pulseScale'],
				'pulseNormalize' => $this->settings['general']['pulseNormalize'],
				'accelerationDelta' => $this->settings['general']['accelerationDelta'],
				'accelerationMax' => $this->settings['general']['accelerationMax'],
				'arrowScroll' => $this->settings['general']['arrowScroll'],
			);
			wp_enqueue_script( 'wpmss_scroll_scripts', plugins_url( 'js/wpmss.php?' . http_build_query($options), __FILE__ ), array('jquery'), 1, 1 );
		}
		
		function plugin_admin_tabs( $current = 'general' ) {
			$tabs = array( 'general' => __('General'), 'info' => __('Help') ); ?>
			<h2 class="nav-tab-wrapper">
			<?php foreach( $tabs as $tab => $name ){ ?>
				<a class="nav-tab <?php echo ( $tab == $current ) ? "nav-tab-active" : "" ?>" href="?page=<?php echo basename(__FILE__) ?>&amp;tab=<?php echo $tab ?>"><?php echo $name ?></a>
			<?php } ?>
			</h2><br><?php
		}

		function admin_options_page() {
			if ( get_current_screen()->id != $this->plugin_admin_page ) return;
			$this->tab = ( isset( $_GET['tab'] ) ) ? $_GET['tab'] : 'general';
			if(isset($_POST['plugin_sent'])) $this->settings[ $this->tab ] = $_POST;
			update_option( "wpmss_settings", $this->settings ); ?>
			<div class="wrap">
				<h2><?php _e( 'MouseWheel Smooth Scroll', $this->domain ); ?></h2>
				<?php if(isset($_POST['plugin_sent'])) echo '<div id="message" class="below-h2 updated"><p>'.__( 'Settings saved.' ).'</p></div>'; ?>
				<form method="post" action="<?php admin_url( 'options-general.php?page=' . basename(__FILE__) ); ?>">
					<input type="hidden" name="plugin_sent" value="1"><?php
					$this->plugin_admin_tabs( $this->tab );
					switch ( $this->tab ) :
						case 'general' :
							$this->plugin_general_options();
							break;
						case 'info' :
							$this->plugin_info_options();
							break;
					endswitch; ?>
				</form>
			</div><?php
		}
		
		function plugin_general_options(){ ?>
			<h3><?php _e("Feel free to experiment with these settings, you can simply reset them to defaults by deleting fields values", $this->domain) ?></h3>
			<table class="form-table">
				<tr>
					<th colspan="2">
						<h3><?php _e("Scrolling Core", $this->domain) ?></h3>
					</th>
				</tr>
				<tr>
					<th>
						<label for="q_field_1"><?php _e("frameRate", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="frameRate" placeholder="150" value="<?php echo $this->settings[ $this->tab ]["frameRate"]; ?>" id="q_field_1">
						[Hz]
					</td>
				</tr>
				<tr>
					<th>
						<label for="q_field_2"><?php _e("animationTime", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="animationTime" placeholder="1000" value="<?php echo $this->settings[ $this->tab ]["animationTime"]; ?>" id="q_field_2">
						[ms]
					</td>
				</tr>
				<tr>
					<th>
						<label for="q_field_3"><?php _e("stepSize", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="stepSize" placeholder="100" value="<?php echo $this->settings[ $this->tab ]["stepSize"]; ?>" id="q_field_3">
						[px]
					</td>
				</tr>

				<tr>
					<th colspan="2">
						<h3><?php _e('Pulse (less tweakable)<br>ratio of "tail" to "acceleration"', $this->domain) ?></h3>
					</th>
				</tr>
				<tr>
					<th>
						<label for="q_field_4"><?php _e("pulseScale", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="pulseScale" placeholder="4" value="<?php echo $this->settings[ $this->tab ]["pulseScale"]; ?>" id="q_field_4">
					</td>
				</tr>
				<tr>
					<th>
						<label for="q_field_5"><?php _e("pulseNormalize", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="pulseNormalize" placeholder="1" value="<?php echo $this->settings[ $this->tab ]["pulseNormalize"]; ?>" id="q_field_5">
					</td>
				</tr>

				<tr>
					<th colspan="2">
						<h3><?php _e('Acceleration', $this->domain) ?></h3>
					</th>
				</tr>
				<tr>
					<th>
						<label for="q_field_6"><?php _e("accelerationDelta", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="accelerationDelta" placeholder="50" value="<?php echo $this->settings[ $this->tab ]["accelerationDelta"]; ?>" id="q_field_6">
					</td>
				</tr>
				<tr>
					<th>
						<label for="q_field_7"><?php _e("accelerationMax", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="accelerationMax" placeholder="3" value="<?php echo $this->settings[ $this->tab ]["accelerationMax"]; ?>" id="q_field_7">
					</td>
				</tr>

				<tr>
					<th colspan="2">
						<h3><?php _e('Keyboard Settings', $this->domain) ?></h3>
					</th>
				</tr>
				<tr>
					<th>
						<label for="q_field_8"><?php _e("arrowScroll", $this->domain) ?>:</label> 
					</th>
					<td>
						<input type="number" name="arrowScroll" placeholder="50" value="<?php echo $this->settings[ $this->tab ]["arrowScroll"]; ?>" id="q_field_8">
						[px]
					</td>
				</tr>
			</table>
			<p class="submit"><input type="submit" class="button button-primary button-large" value="<?php _e( 'Save' ) ?>"></p><?php
		}
		
		function plugin_info_options(){ ?>
			<p><?php _e('Any ideas, problems, issues?', $this->domain) ?></p>
			<p>Ing. Jakub Novák</p>
			<p><a href="mailto:info@kubiq.sk" target="_blank">info@kubiq.sk</a></p>
			<p><a href="http://kubiq.sk/" target="_blank">https://kubiq.sk</a></p><?php
		}
	}

	$wpmss_var = new wpmss();
}