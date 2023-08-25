import React from 'react'

const NavBar = () => {
  return (
    <div class="container-fluid">
      <nav id="navscroll" class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="fa fa-bars fa-2x"></span>
            </button>
            <a class="branding" href="https://aif.org/" role="link">
              <h1 class="sr-only"></h1>
              <img class="logo entered lazyloaded" src="https://aif.org/wp-content/themes/aif-2018/assets/images/AIF-logo.png" alt="AIF" data-lazy-src="https://aif.org/wp-content/themes/aif-2018/assets/images/AIF-logo.png" data-ll-status="loaded" /><noscript><img class="logo" src="https://aif.org/wp-content/themes/aif-2018/assets/images/AIF-logo.png" alt="AIF" /> </noscript>
            </a>
          </div>
          <div id="navbar" class="navbar-collapse collapse navbar-right">

            <ul class="nav navbar-nav"><li id="menu-item-119235" class="col3 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-119235 dropdown"><a title="About Us" data-toggle="none" class="dropdown-toggle" aria-haspopup="true" role="link">About Us </a><span class="caret mobile_toggle"></span>
              <ul role="menu" class=" dropdown-menu">
                <li id="menu-item-119211" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119211"><a title="Mission Vision and Values" href="https://aif.org/about/mission-vision-and-values/" role="link">Mission Vision and Values</a></li>
                <li id="menu-item-119214" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119214"><a title="History" href="https://aif.org/about/history/" role="link">History</a></li>
                <li id="menu-item-115760" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115760"><a title="People" href="https://aif.org/about/people/" role="link">People</a></li>
                <li id="menu-item-119220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-119220"><a title="Knowledge Center" href="https://aif.org/about/knowledge-center/" role="link">Knowledge Center</a></li>
                <li id="menu-item-115757" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115757"><a title="News &amp; Updates" href="https://aif.org/about/news-updates/" role="link">News &amp; Updates</a></li>
                <li id="menu-item-115759" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115759"><a title="Financials" href="https://aif.org/about/financials/" role="link">Financials</a></li>
              </ul>
            </li>
              <li id="menu-item-115740" class="col1 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-115740 dropdown"><a title="Our Work" href="https://aif.org/our-work/" data-toggle="none" class="dropdown-toggle" aria-haspopup="true" role="link">Our Work </a><span class="caret mobile_toggle"></span>
                <ul role="menu" class=" dropdown-menu">
                  <li id="menu-item-115781" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115781 dropdown"><a title="Education" href="https://aif.org/our-work/education/" role="link">Education</a>
                    <ul role="menu" class=" dropdown-menu">
                      <li id="menu-item-116572" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116572"><a title="Digital Equalizer" href="https://aif.org/our-work/education/digital-equalizer/" role="link">Digital Equalizer</a></li>
                      <li id="menu-item-116140" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116140"><a title="Learning and Migration Program" href="https://aif.org/our-work/education/learning-and-migration-program/" role="link">Learning and Migration Program</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-116724" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-116724 dropdown"><a title="Livelihoods" href="https://aif.org/our-work/livelihoods/" role="link">Livelihoods</a>
                    <ul role="menu" class=" dropdown-menu">
                      <li id="menu-item-116707" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116707"><a title="Ability Based Livelihood Empowerment" href="https://aif.org/our-work/livelihoods/ability-based-livelihood-empowerment/" role="link">Ability Based Livelihood Empowerment</a></li>
                      <li id="menu-item-116890" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116890"><a title="Market Aligned Skills Training" href="https://aif.org/our-work/livelihoods/market-aligned-skills-training/" role="link">Market Aligned Skills Training</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-115788" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-115788 dropdown"><a title="Public Health" href="https://aif.org/mansi/" role="link">Public Health</a>
                    <ul role="menu" class=" dropdown-menu">
                      <li id="menu-item-115789" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115789"><a title="MANSI" href="https://aif.org/mansi/" role="link">MANSI</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-115754" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-115754 dropdown"><a title="Leadership Development" href="https://aif.org/fellowship/" role="link">Leadership Development</a>
                    <ul role="menu" class=" dropdown-menu">
                      <li id="menu-item-116040" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-116040"><a title="Banyan Impact Fellowship" href="https://aif.org/fellowship/" role="link">Banyan Impact Fellowship</a></li>
                    </ul>
                  </li>
                  <li id="menu-item-116726" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-116726 dropdown"><a title="Humanitarian Relief" href="https://aif.org/humanitarian-relief/" role="link">Humanitarian Relief</a>
                    <ul role="menu" class=" dropdown-menu">
                      <li id="menu-item-115742" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115742"><a title="AIF COVID-19 Relief Response" href="https://aif.org/leadership-message/" role="link">AIF COVID-19 Relief Response</a></li>
                      <li id="menu-item-116728" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-116728"><a title="Covid rehabilitation fund" href="https://aif.org/covid-rehabilitation/" role="link">Covid rehabilitation fund</a></li>
                      <li id="menu-item-115743" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115743"><a title="The First Million" href="https://aif.org/the-first-million/" role="link">The First Million</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li id="menu-item-115749" class="col2 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-115749 dropdown"><a title="Get Involved" href="https://aif.org/get-involved/" data-toggle="none" class="dropdown-toggle" aria-haspopup="true" role="link">Get Involved </a><span class="caret mobile_toggle"></span>
                <ul role="menu" class=" dropdown-menu">
                  <li id="menu-item-115751" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115751"><a title="Join a Chapter" href="https://aif.org/get-involved/chapters/" role="link">Join a Chapter</a></li>
                  <li id="menu-item-115752" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115752"><a title="Join Circle of Hope" href="https://aif.org/get-involved/join-circle-of-hope/" role="link">Join Circle of Hope</a></li>
                  <li id="menu-item-115753" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115753"><a title="Events" href="https://aif.org/get-involved/aif-events/" role="link">Events</a></li>
                  <li id="menu-item-115763" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115763"><a title="Careers" href="https://aif.org/get-involved/careers/" role="link">Careers</a></li>
                  <li id="menu-item-115861" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115861"><a title="Contact Us" href="https://aif.org/contact-us/" role="link">Contact Us</a></li>
                </ul>
              </li>
              <li id="menu-item-115914" class="col3a menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-138 current_page_item menu-item-115914 active"><a title="Blog" href="https://aif.org/blog/" role="link">Blog</a></li>
              <li id="menu-item-116269" class="col4 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-116269 dropdown"><a title="Ways to give" href="#" data-toggle="none" class="dropdown-toggle" aria-haspopup="true" role="link">Ways to give </a><span class="caret mobile_toggle"></span>
                <ul role="menu" class=" dropdown-menu">
                  <li id="menu-item-115891" class="top-line menu-item menu-item-type-custom menu-item-object-custom menu-item-115891"><a title="Help us help those in need." href="#" role="link">Help us help those in need.</a></li>
                  <li id="menu-item-116239" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-116239"><a title="Donate Now" href="https://aif.org/donate-now/" role="link">Donate Now</a></li>
                  <li id="menu-item-115766" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115766"><a title="Donate Crypto" href="https://aif.org/donatecrypto/" role="link">Donate Crypto</a></li>
                  <li id="menu-item-115773" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-115773"><a title="Give Stocks" target="_blank" href="https://www.freewill.com/stocks/aif?utm_source=aif&amp;utm_medium=homepage&amp;utm_campaign=header_navigation" role="link">Give Stocks</a></li>
                  <li id="menu-item-116240" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-116240"><a title="Become a Monthly Donor" href="https://aif.org/monthly-giving/" role="link">Become a Monthly Donor</a></li>
                  <li id="menu-item-115770" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-115770"><a title="Start a Birthday Fundraiser" href="https://aif.org/giving-birthday/" role="link">Start a Birthday Fundraiser</a></li>
                  <li id="menu-item-115771" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-115771"><a title="Leave a Legacy" href="https://aif.org/leave-a-legacy/" role="link">Leave a Legacy</a></li>
                  <li id="menu-item-115769" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-115769"><a title="Donate in India" target="_blank" href="https://aif-india.org/donate-now/" role="link">Donate in India</a></li>
                </ul>
              </li>
            </ul>

          </div>
          <div class="mobile-overlay"></div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar