<?php
/**
 * Admin Support Page
*/

class AAB_Admin_Page {
    /**
     * Contructor
    */
    public function __construct(){
        add_action( 'admin_menu', [ $this, 'aab_plugin_admin_page' ] );
        add_action( 'admin_enqueue_scripts', [ $this, 'aab_admin_page_assets' ] );
    }

    // Admin Assets
    public function aab_admin_page_assets() {
		$page = $_GET['page'] ?? '';
		if ( $page == 'advanced-accordion-block' ) {
			wp_enqueue_style('aab-admin-css', plugins_url('assets/css/dashboard-app.css', __FILE__));
		}
    }

    // Admin Page
    public function aab_plugin_admin_page(){
        add_submenu_page( 'options-general.php', 'Accordion Block', 'Accordion Block', 'manage_options', 'advanced-accordion-block', [ $this, 'aab_admin_page_content_callback' ] );
    }

    public function aab_admin_page_content_callback(){
        ?>
<main class="py-2rem">
    <div class="ezd-custom-container ezd-container ">
        <div class="ezd-grid ezd-grid-cols-12">
            <div class="ezd-xl-col-9">
                <section class="ezd_dashboard_box">
                    <h2>Welcome to Advanced Accordion Block!</h2>
                    <p>Advanced Accordion Gutenberg Block is Built with Gutenberg
                        Native Components that allows you to build a FAQs Section or Accordion easily on your
                        site post and page using Gutenberg Editor.</p>
                    <div class="aab-video-container">
                        <iframe height="520" src="https://www.youtube.com/embed/K40z8KxojxE"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <span class="ezd-d-flex">
                        <a href="<?php echo admin_url('post-new.php?post_type=page'); ?>" target="_blank"
                            class="aab-btn btn-fill">
                            Create New Page
                        </a>
                        <a href="http://spider-themes.net/" target="_blank" class="aab-btn inline-flex ">
                            Visit Our Website
                        </a>
                    </span>
                </section>
            </div>
            <div class="ezd-xl-col-3">
                <section class="section-2-title ezd_dashboard_box box-2">
                    <h3> Key Features: </h3>
                    <p>
                        Advanced Accordion Gutenberg Block has unlimited Styling with Custom Margin,
                        Padding,
                        Border Radius, Color, Background, Tag Selection, etc.
                    </p>
                    <ul>
                        <li>Highly Customizable</li>
                        <li>Built with Gutenberg Native Components</li>
                        <li>Unlimited Nested Accordion</li>
                        <li>SEO Friendly</li>
                        <li>All Types of Content Supported</li>
                        <li>Responsive & Retina Ready</li>
                        <li>Super Fast, Slick</li>
                        <li>5 Pairs of Icons</li>
                        <li>Make Active Accordion on Page Load</li>
                    </ul>
                </section>
                <section class="section-2-title ezd_dashboard_box box-2">
                    <h3>Get 5-star Support</h3>
                    <p>Need some help? Our awesome support team is
                        here
                        to help you with any question you have.</p>
                    <a class="text-base text-aab focus:text-aab focus-visible:text-aab-hover active:text-aab-hover hover:text-aab-hover underline"
                        href="https://wordpress.org/support/plugin/advanced-accordion-block/" target="_blank"
                        rel="noreferrer">Get Support</a>
                    <a class="text-base text-aab focus:text-aab focus-visible:text-aab-hover active:text-aab-hover hover:text-aab-hover no-underline"
                        href="https://wordpress.org/support/plugin/advanced-accordion-block/" target="_blank"
                        rel="noreferrer"> → </a>
                </section>
            </div>
        </div>
    </div>
</main>
<?php
    }
}
 new AAB_Admin_Page();