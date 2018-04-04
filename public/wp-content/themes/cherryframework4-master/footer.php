<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 */
    do_action( 'cherry_footer_before' );

    do_action( 'cherry_footer' );

    do_action( 'cherry_footer_after' ); ?>

  </div><!--site-wrapper-->

<?php do_action( 'cherry_body_end' ); ?>

<?php wp_footer(); ?>
<link rel="stylesheet" type="text/css" href="http://ocrepairs.com/wp-content/themes/cherryframework4-master/media.css">
<script type='text/javascript' src='http://repairsd.com/wp-content/plugins/wp-slick-slider-and-image-carousel/assets/js/slick.min.js'></script>
<script type='text/javascript' src='http://repairsd.com/wp-content/themes/cherryframework4-master/general.js'></script>
</body>
</html>