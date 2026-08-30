
const currentUrl = window.location.href;
const siteUrl = "https://u93132.github.io";
let updatedUrl = currentUrl.replace("https://u93132.github.io/homepage", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "/homepage", "");
}
if ("zh-tw".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-tw", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-關於我",
    title: "關於我",
    section: "導覽選單",
    handler: () => {
      window.location.href = "/homepage/zh-tw/";
    },
  },{id: "nav-著作",
          title: "著作",
          description: "期刊論文、技術報告與研討會論文，依年份由新至舊排列。",
          section: "導覽選單",
          handler: () => {
            window.location.href = "/homepage/zh-tw/publications/";
          },
        },{id: "nav-研究",
          title: "研究",
          description: "目前與過去的研究主題。",
          section: "導覽選單",
          handler: () => {
            window.location.href = "/homepage/zh-tw/research/";
          },
        },{id: "nav-教學",
          title: "教學",
          description: "於國立臺灣大學與加州大學聖地牙哥分校開授之課程。",
          section: "導覽選單",
          handler: () => {
            window.location.href = "/homepage/zh-tw/teaching/";
          },
        },{id: "nav-履歷",
          title: "履歷",
          description: "賴晉達（Chin-Ta &quot;Kiida&quot; Lai）的履歷，可透過右側按鈕下載 PDF 版本。",
          section: "導覽選單",
          handler: () => {
            window.location.href = "/homepage/zh-tw/cv/";
          },
        },{id: "news-加入國立臺灣大學土木工程學系-擔任助理教授",
          title: '加入國立臺灣大學土木工程學系，擔任助理教授。🎉',
          description: "",
          section: "動態",},{id: "news-獲教育部五年期-玉山青年學者計畫-殊榮",
          title: '獲教育部五年期「玉山青年學者計畫」殊榮。',
          description: "",
          section: "動態",},{id: "news-論文-calibration-and-validation-of-a-dynamic-model-of-the-uc-san-diego-nheri-6-dof-large-high-performance-outdoor-shake-table-刊登於期刊-engineering-structures",
          title: '論文〈Calibration and Validation of a Dynamic Model of the UC San Diego NHERI...',
          description: "",
          section: "動態",},{id: "news-研究計畫-主動控制技術應用於台北-101-風阻尼器系統-獲國家科學及技術委員會補助",
          title: '研究計畫「主動控制技術應用於台北 101 風阻尼器系統」獲國家科學及技術委員會補助。',
          description: "",
          section: "動態",},{id: "projects-lhpost6-振動台數位孿生",
          title: 'LHPOST6 振動台數位孿生',
          description: "全球最大戶外振動台（UCSD）之動力模型建構、校正與驗證。",
          section: "研究",handler: () => {
              window.location.href = "/homepage/zh-tw/projects/1_lhpost6/";
            },},{id: "projects-台北-101-風阻尼器主動控制",
          title: '台北 101 風阻尼器主動控制',
          description: "將主動控制技術應用於台北 101 調諧質量阻尼器，抑制位移並提升消能效率。",
          section: "研究",handler: () => {
              window.location.href = "/homepage/zh-tw/projects/2_taipei101/";
            },},{id: "projects-地震工程實驗技術",
          title: '地震工程實驗技術',
          description: "振動台控制、樓板反應重現、系統識別與實驗室軟體開發。",
          section: "研究",handler: () => {
              window.location.href = "/homepage/zh-tw/projects/3_experimental/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: '社群連結',
        handler: () => {
          window.open("/homepage/assets/pdf/zh-tw//assets/pdf/[LANG]/Chin-Ta_Lai_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: '寄送電子郵件',
        section: '社群連結',
        handler: () => {
          window.open("mailto:%63%74%6C%61%69@%6E%74%75.%65%64%75.%74%77", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社群連結',
        handler: () => {
          window.open("https://github.com/u93132", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: '社群連結',
        handler: () => {
          window.open("https://orcid.org/0009-0006-8200-7012", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社群連結',
        handler: () => {
          window.open("/homepage/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '社群連結',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=NprsEKgAAAAJ", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '語言',
          handler: () => {
            window.location.href = "/homepage" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '切換為淺色主題',
      description: '將網站切換為淺色主題',
      section: '主題',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '切換為深色主題',
      description: '將網站切換為深色主題',
      section: '主題',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '使用系統預設主題',
      description: '將網站切換為系統預設主題',
      section: '主題',
      handler: () => {
        setThemeSetting("system");
      },
    },];
