<?php function get_wpsisac_carousel_slider( $atts, $content = null ){       extract(shortcode_atts(array(		"limit"     		=> '-1',		"category" 			=> '',		"design" 			=> 'design-6',		'image_size' 		=> 'full',				"slidestoshow" 		=> '3',		"slidestoscroll" 	=> '1',				"dots"     			=> 'true',		"arrows"     		=> 'true',		"autoplay"     		=> 'true',			"autoplay_interval" => '3000',		"speed"             => '300',		"centermode"        => 'false',			"variablewidth"    	=> 'false',		"sliderheight"     	=> '400',			"rtl"               => '',	), $atts));	$shortcode_designs 	= wpsisac_slider_designs();	$limit 				= !empty($limit) 					? $limit 						: '-1';		$cat 				= (!empty($category)) 				? explode(',', $category) 		: '';		$slidestoshow 		= !empty($slidestoshow) 			? $slidestoshow 						: 3;	$slidestoscroll 	= !empty($slidestoscroll) 			? $slidestoscroll 						: 1;	$design 			= ($design && (array_key_exists(trim($design), $shortcode_designs))) ? trim($design) : 'design-6';		$dots 				= ( $dots == 'false' ) 				? 'false' 						: 'true';	$arrows 			= ( $arrows == 'false' ) 			? 'false' 						: 'true';	$autoplay 			= ( $autoplay == 'false' ) 			? 'false' 						: 'true';	$autoplay_interval 	= (!empty($autoplay_interval)) 		? $autoplay_interval 			: 3000;	$speed 				= (!empty($speed)) 					? $speed 						: 300;		$sliderheight 		= (!empty($sliderheight)) 			? $sliderheight 				: '';	$slider_height_css 	= (!empty($sliderheight))			? "style='height:{$sliderheight}px;'" : '';	$centermode 		= ( $centermode == 'false' ) 		? 'false' 						: 'true';	$variablewidth 		= ( $variablewidth == 'false' ) 	? 'false' 						: 'true';	$sliderimage_size 	= !empty($image_size) 				? $image_size 					: 'full';		// For RTL	if( empty($rtl) && is_rtl() ) {		$rtl = 'true';	} elseif ( $rtl == 'true' ) {		$rtl = 'true';	} else {		$rtl = 'false';	}		// Shortcode file	$design_file_path 	= WPSISAC_VERSION_DIR . '/templates/' . $design . '.php';	$design_file 		= (file_exists($design_file_path)) ? $design_file_path : '';		// Enqueus required script	wp_enqueue_script( 'wpos-slick-jquery' );	wp_enqueue_script( 'wpsisac-public-script' );			// Slider configuration	$slider_conf = compact('slidestoshow','slidestoscroll','dots', 'arrows', 'autoplay', 'autoplay_interval', 'speed', 'rtl', 'centermode' , 'variablewidth');	ob_start();			global $post;	$unique			= wpsisac_get_unique();	$post_type 		= 'slick_slider';	$orderby 		= 'post_date';	$order 			= 'DESC';		     $args = array (             'post_type'      => $post_type,             'orderby'        => $orderby,             'order'          => $order,            'posts_per_page' => $limit,                         );		if($cat != ""){            	$args['tax_query'] = array( 				array( 				'taxonomy' => 'wpsisac_slider-category',				'field' => 'term_id', 				'terms' => $cat) 				);            }              	$query 		= new WP_Query($args);      	$post_count = $query->post_count;         	if ( $query->have_posts() ) :				?>		<div class="wpsisac-slick-carousal-wrp wpsisac-clearfix">			<div id="wpsisac-slick-carousal-<?php echo $unique; ?>"  class="wpsisac-slick-carousal <?php echo $design; ?> <?php if($centermode == 'true' && $variablewidth == 'true') { echo 'wpsisac-center variablewidthv'; } elseif($centermode == 'true') { echo 'wpsisac-center';} else { echo 'simplecarousal';} ?>">					<?php 					while ( $query->have_posts() ) : $query->the_post();												// Include shortcode html file								if( $design_file ) {									include( $design_file );								}					endwhile; ?>			</div>			<div class="wpsisac-carousal-conf wpsisac-hide" data-conf="<?php echo htmlspecialchars(json_encode($slider_conf)); ?>"></div>		</div>		<?php    endif;    wp_reset_query(); 	return ob_get_clean();}add_shortcode('slick-carousel-slider','get_wpsisac_carousel_slider');