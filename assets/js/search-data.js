
const currentUrl = window.location.href;
const siteUrl = "https://u93132.github.io";
let updatedUrl = currentUrl.replace("https://u93132.github.io/homepage", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/homepage", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/homepage/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Journal papers, technical reports, and conference publications in reversed chronological order.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/homepage/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Current and past research topics.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/homepage/research/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses taught at National Taiwan University and UC San Diego.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/homepage/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum vitae of Chin-Ta (Kiida) Lai. A PDF version is available via the button on the right.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/homepage/cv/";
          },
        },{id: "news-i-joined-the-department-of-civil-engineering-at-national-taiwan-university-as-an-assistant-professor",
          title: 'I joined the Department of Civil Engineering at National Taiwan University as an...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-5-year-yushan-young-scholar-program-by-the-ministry-of-education-taiwan",
          title: 'I was awarded the 5-year Yushan Young Scholar Program by the Ministry of...',
          description: "",
          section: "News",},{id: "news-our-paper-calibration-and-validation-of-a-dynamic-model-of-the-uc-san-diego-nheri-6-dof-large-high-performance-outdoor-shake-table-was-published-in-engineering-structures",
          title: 'Our paper “Calibration and Validation of a Dynamic Model of the UC San...',
          description: "",
          section: "News",},{id: "news-our-project-application-of-active-control-technology-to-the-taipei-101-wind-damper-system-was-funded-by-the-national-science-and-technology-council-taiwan",
          title: 'Our project “Application of Active Control Technology to the Taipei 101 Wind Damper...',
          description: "",
          section: "News",},{id: "projects-digital-twin-of-the-lhpost6-shake-table",
          title: 'Digital Twin of the LHPOST6 Shake Table',
          description: "Dynamic modeling, calibration, and validation of the world&#39;s largest outdoor shake table at UC San Diego.",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/1_lhpost6/";
            },},{id: "projects-active-control-of-the-taipei-101-wind-damper",
          title: 'Active Control of the Taipei 101 Wind Damper',
          description: "Applying active control technology to the Taipei 101 tuned mass damper for displacement suppression and improved energy dissipation.",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/2_taipei101/";
            },},{id: "projects-experimental-technology-for-earthquake-engineering",
          title: 'Experimental Technology for Earthquake Engineering',
          description: "Shake table control, floor response reproduction, system identification, and laboratory software development.",
          section: "Projects",handler: () => {
              window.location.href = "/homepage/projects/3_experimental/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/homepage/assets/pdf/en-us//assets/pdf/[LANG]/Chin-Ta_Lai_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%74%6C%61%69@%6E%74%75.%65%64%75.%74%77", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/u93132", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-8200-7012", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/homepage/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NprsEKgAAAAJ", "_blank");
        },
      },{
          id: 'lang-zh-tw',
          title: 'zh-tw',
          section: 'Languages',
          handler: () => {
            window.location.href = "/homepage/zh-tw" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
