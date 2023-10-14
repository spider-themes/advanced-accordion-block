<?php
// Function to get the post meta by ID
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

// Function to update the post meta with the previous data and current data
function update_post_meta_action() {

    // Get the data from the AJAX request
    if (isset($_POST['post_id'])) {
        $post_id = $_POST['post_id'];
        $count = (int)$_POST['count'];
        $value = $_POST['value'];
    
        // Retrieve the existing post meta for the specific value ("yes" or "no")
        $existing_count = get_post_meta($post_id, $value, true);
        if ( $existing_count < 0 ) {
            $existing_count = 0;
        }
    
        // Update post meta with the new count
        update_post_meta($post_id, $value, $existing_count + 1);
    
        // Send a response back to the client (optional)
        echo 'Post meta updated successfully';
    }
    wp_die();
  }
  
  add_action('wp_ajax_update_post_meta_action', 'update_post_meta_action');
  add_action('wp_ajax_nopriv_update_post_meta_action', 'update_post_meta_action');