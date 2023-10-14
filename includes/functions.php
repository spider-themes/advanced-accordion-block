<?php

// Update counter
function update_counts_display(){
    
    // Retrieve data from the AJAX request
    $dataId   = $_POST['dataId'];
    $value    = $_POST['value'];
    $yesCount = $_POST['yescount'];
    $noCount  = $_POST['nocount'];
      
    // Store the updated counts and return them as a JSON response
    $yesValue = get_post_meta($dataId, 'yes', true);  

    // if prev smaller then 0
    if ( $yesValue < 0 ) {
        $yesValue = 0;
    }

    $noValue = get_post_meta($dataId, 'no', true);
    if ( $noValue < 0 ) {
        $noValue = 0;
    }

    update_post_meta($dataId, 'yes', $yesValue + $yesCount); 
    update_post_meta($dataId, 'no', $noValue + $noCount);
    
    wp_die();
    
}
add_action('wp_ajax_update_counts_display', 'update_counts_display');
add_action('wp_ajax_nopriv_update_counts_display', 'update_counts_display');


// Show saved counter
function get_post_meta_by_id_callback() {

  if (isset($_POST['data_id'])) {

       $data_id = sanitize_text_field($_POST['data_id']);
       $yes     = get_post_meta($data_id, 'yes', true);
       $no      = get_post_meta($data_id, 'no', true);

       $response = array(
           'yes' => $yes,
           'no' => $no,
       );

       wp_send_json($response);
  } else {
      echo 'No data_id received.';
  }
   wp_die();

}
add_action('wp_ajax_get_post_meta_by_id', 'get_post_meta_by_id_callback');
add_action('wp_ajax_nopriv_get_post_meta_by_id', 'get_post_meta_by_id_callback');