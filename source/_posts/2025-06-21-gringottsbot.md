---
title: "GringottsBot – A Telegram Bot for Smart Expense Tracking - Zi Liang"
date: 2025-06-21
---

<div class="container-fluid nopadding-x">

<div class="row nomargin-x">

<div class="side-col d-none d-lg-block col-lg-2">

</div>

<div class="col-lg-8 nopadding-x-md">

<div id="board-ctn" class="container nopadding-x-md">

<div id="board">

# GringottsBot – A Telegram Bot for Smart Expense Tracking

<div class="markdown-body">

💰 Managing personal expenses shouldn’t feel like battling a dragon in
Gringotts.  
I built **GringottsBot**, a Telegram bot that acts like a personal
goblin accountant — tracking, categorizing, and reporting your expenses
in real-time.

------------------------------------------------------------------------

## <a href="#🤖-What-GringottsBot-Does" class="headerlink"
title="🤖 What GringottsBot Does"></a>🤖 What GringottsBot Does

GringottsBot is a Telegram bot that:

- Accepts commands like `/start`, `/settimezone` and many inline
  keyboard buttons to manage your expenses
- Stores and retrieves data from a **MySQL database** (so it’s
  persistent)
- Automatically categorizes expenses and supports monthly reports
- Exports to **PDF** report
- Shows statistics like category breakdowns and trends
- Supports timezone awareness for logging

The goal is to make expense tracking as frictionless and automated as
possible — right from Telegram.

------------------------------------------------------------------------

## <a href="#⚙️-Tech-Stack" class="headerlink" title="⚙️ Tech Stack"></a>⚙️ Tech Stack

| Layer         | Tools Used                         |
|---------------|------------------------------------|
| 🧠 Bot Logic  | Python + `python-telegram-bot`     |
| 🗃️ Data Store | MySQL (persistent DB)              |
| 📄 Reports    | `pandas`, `matplotlib`, `fpdf`     |
| 🌐 Hosting    | PythonAnywhere (24/7 uptime)       |
| ⏰ Features   | Timezone support, command-based UX |

------------------------------------------------------------------------

## <a href="#📸-Bot-in-Action" class="headerlink"
title="📸 Bot in Action"></a>📸 Bot in Action

<img src="/ziliang.github.io/img/gringottsbot-demo.gif"
srcset="/ziliang.github.io/img/loading.gif" data-lazyload=""
alt="GringottsBot Demo" />

------------------------------------------------------------------------

## <a href="#What-I-Learned" class="headerlink" title="What I Learned"></a>What I Learned

- How to design and implement a stateful Telegram bot

- Setting up persistent storage with MySQL using foreign keys and
  indexing

- Working with inline keyboards, command handlers, and conversation
  flows

- Generating Excel and PDF reports programmatically

- Managing user sessions, timezones, and error handling gracefully

</div>

------------------------------------------------------------------------

<div>

<div class="post-metas my-3">

<div class="post-meta">

<a href="/ziliang.github.io/tags/Python/"
class="print-no-link">#Python</a>
<a href="/ziliang.github.io/tags/Telegram-Bot/"
class="print-no-link">#Telegram Bot</a>
<a href="/ziliang.github.io/tags/MySQL/"
class="print-no-link">#MySQL</a>
<a href="/ziliang.github.io/tags/Automation/"
class="print-no-link">#Automation</a>
<a href="/ziliang.github.io/tags/Finance/"
class="print-no-link">#Finance</a>
<a href="/ziliang.github.io/tags/Gringotts/"
class="print-no-link">#Gringotts</a>

</div>

</div>

<div class="license-box my-3">

<div class="license-title">

<div>

GringottsBot – A Telegram Bot for Smart Expense Tracking

</div>

<div>

https://radioblodo.github.io/ziliang.github.io/2025/06/21/gringottsbot/

</div>

</div>

<div class="license-meta">

<div class="license-meta-item">

<div>

Author

</div>

<div>

Zi Liang

</div>

</div>

<div class="license-meta-item license-meta-date">

<div>

Posted on

</div>

<div>

June 21, 2025

</div>

</div>

<div class="license-meta-item">

<div>

Licensed under

</div>

<div>

<a href="https://creativecommons.org/licenses/by/4.0/"
class="print-no-link" target="_blank"><span
class="hint--top hint--rounded" aria-label="BY - Attribution"> <em></em>
</span></a>

</div>

</div>

</div>

<div class="license-icon iconfont">

</div>

</div>

<div class="post-prevnext my-3">

[<span class="hidden-mobile">SafeLink Scanner – A Flutter App to Detect
Malicious URLs</span> <span class="visible-mobile">Next</span>
](/ziliang.github.io/2025/06/21/safelink-scanner/ "SafeLink Scanner – A Flutter App to Detect Malicious URLs")

</div>

</div>

</div>

</div>

</div>

<div class="side-col d-none d-lg-block col-lg-2">

<div id="toc">

Table of Contents

<div id="toc-body" class="toc-body">

</div>

</div>

</div>

</div>

</div>

<a href="#" id="scroll-top-button" aria-label="TOP"
role="button"><em></em></a>

<div id="modalSearch" class="modal fade" tabindex="-1" role="dialog"
aria-labelledby="ModalLabel" aria-hidden="true">

<div class="modal-dialog modal-dialog-scrollable modal-lg"
role="document">

<div class="modal-content">

<div class="modal-header text-center">

#### Search

<span aria-hidden="true">×</span>

</div>

<div class="modal-body mx-3">

<div class="md-form mb-5">

Keyword

</div>

<div id="local-search-result" class="list-group">

</div>

</div>

</div>

</div>

</div>
