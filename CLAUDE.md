# CLAUDE.md — 專案交接說明

這是**賴晉達（Chin-Ta "Kiida" Lai）**的學術個人網站。網站主人是國立臺灣大學土木工程學系助理教授（2025 年 2 月到任），研究領域：結構控制、振動台動力學與數位孿生（UCSD LHPOST6）、系統識別、實驗技術、機器人學。

- 上線網址：<https://u93132.github.io/homepage/>
- 倉庫：`github.com/u93132/homepage`（分支 `main`；GitHub Pages 發布 `gh-pages` 分支）
- Email：ctlai@ntu.edu.tw／個人 u93132@gmail.com
- 系網教師頁（身分佐證用）：<https://www.ce.ntu.edu.tw/en/people/faculty/structural-engineering/>

## 技術架構

- **主題**：[george-gca/multi-language-al-folio](https://github.com/george-gca/multi-language-al-folio)（al-folio 的多語系分支，jekyll-polyglot）
- **語言**：`languages: ["en-us", "zh-tw"]`，預設 en-us（見 `_config.yml`）
- 內容依語言分資料夾：`_pages/<lang>/`、`_data/<lang>/`（`strings.yml` 介面字串、`cv.yml` 履歷）、`_news/<lang>/`、`_projects/<lang>/`
- 著作書目**兩語言共用**：`_bibliography/papers.bib`（jekyll-scholar；期刊 @article、技術報告 @techreport、研討會 @inproceedings；`selected = {true}` 會出現在首頁精選）
- 社群連結／IDs：`_data/socials.yml`（Google Scholar ID `NprsEKgAAAAJ`、ORCID `0009-0006-8200-7012`；**LinkedIn 尚未填**）
- CV PDF：`assets/pdf/<lang>/Chin-Ta_Lai_CV.pdf`（兩份目前是同一個英文檔）

## 常用操作

新增論文：在 `papers.bib` 加一筆 BibTeX 即可，兩個語言的著作頁都會自動更新。DOI 務必查證後才放，寧缺勿錯。

新增動態：在 `_news/en-us/` 和 `_news/zh-tw/` 各放一個同名 `.md`（front matter 用 `layout: post`、`date`、`inline: true`）。

本機預覽（需 Ruby 3.3，本機裝在 `C:\Ruby33-x64`，舊的 2.6 在 `C:\Ruby26-x64` 勿用勿刪）：

```bash
bundle exec jekyll serve --config _config.yml,_config_local.yml
```

開 `http://localhost:4000/homepage/`。`_config_local.yml` 只做一件事：本機停用 imagemagick（本機沒裝，CI 上有）。

## 部署（重要，別改壞）

推上 `main` → `.github/workflows/deploy.yml` 建置 → 推到 `gh-pages` → GitHub Pages（Settings→Pages 設定為 Deploy from a branch: `gh-pages`）。

**關鍵修正**：deploy.yml 裡有一步 `touch _site/.nojekyll`——沒有它 GitHub Pages 會對 gh-pages 再跑一次自己的 Jekyll 建置然後失敗（曾發生過，錯誤是 UPGRADING.pt-br.md 的 Liquid 語法）。這一步不能拿掉。

引用數自動更新：`update-citations.yml` 排程執行，從 `socials.yml` 讀 `scholar_userid` 更新 `_data/citations.yml`，不需人工維護。

## 曾做過的客製（與上游主題的差異）

- 移除 pt-br／fr-ca 語言與所有範例內容（Einstein、範例部落格、books、profiles、repositories、dropdown 頁）
- `projects` 頁改名為 research（permalink `/research/`），三張卡片：LHPOST6 數位孿生、台北 101 風阻尼器主動控制、實驗技術
- CV 頁資料源用 `_data/<lang>/cv.yml`（已刪範例 `resume_*.json` 並停用 `jekyll_get_json`——別恢復，否則 CV 頁會被 JSON 蓋掉）
- blog/news 頁存在但 `nav: false`
- 頭像 `assets/img/prof_pic.jpg` 與研究照片取自使用者提供的 Flyer PPTX
- 根目錄的個人原始檔（CV/Flyer/Poster）在 `.gitignore`，不進倉庫

## 待辦與進行中事項（2026-08-31 狀態）

1. **Claude Team plan for scientists 申請審核中**：已用 ctlai@ntu.edu.tw 送出、附系網教師頁與本網站連結，等人工審核（約 7 個工作天）。通過後可能會換到新的 Claude 帳號——這份文件就是為交接而寫。
2. `_data/socials.yml` 的 LinkedIn 未填。
3. 中文姓名「賴晉達」已確認（來源：系網官方頁面）並用於 zh-tw 頁面。
4. News 的日期是依 CV 推估的，網站主人可自行修正。
5. 英文版系網總名錄（All Faculty Members）尚未收錄網站主人，只有結構工程組分頁有——若要向系辦反映可提。

## 給接手的 Claude 的注意事項

- 使用者以繁體中文溝通，技術程度：非網頁開發者，指令要給可直接執行的完整版本。
- 不要憑空猜測姓名、DOI、日期等事實；本專案曾因此修正過兩個推錯的 DOI。
- Windows 環境（PowerShell）；git push 需要使用者的認證（Git Credential Manager 已設定過）。
