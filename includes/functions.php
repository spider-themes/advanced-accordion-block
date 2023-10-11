<?php


add_action('wp_head', function(){
     $id = (int)'3e84dce9';
    //echo get_post_meta($id, 'yes', true); 
    
 
});

function update_counts_display(){
    
 
      // Retrieve data from the AJAX request
      $dataId   = (int)$_POST['dataId'];
      $value    = $_POST['value'];
      $yesCount = $_POST['yesCount'];
      
    
      // Store the updated counts and return them as a JSON response
 
      $previous = get_post_meta($dataId, $value, true);
      update_post_meta($dataId, $value, $previous + 1);

    wp_die();
    
}
add_action('wp_ajax_update_counts_display', 'update_counts_display');
add_action('wp_ajax_nopriv_update_counts_display', 'update_counts_display');
