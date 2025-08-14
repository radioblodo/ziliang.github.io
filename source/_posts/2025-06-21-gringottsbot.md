---
title: "GringottsBot – A Telegram Bot for Smart Expense Tracking"
date: 2025-06-21
slug: gringottsbot
tags: [Python, "Telegram Bot", MySQL, Automation, Finance, Gringotts]
categories: [Projects]
---

💰 Managing personal expenses shouldn’t feel like battling a dragon in Gringotts.  
I built **GringottsBot**, a Telegram bot that acts like a personal goblin accountant — tracking, categorizing, and reporting your expenses in real time.

---

## 🤖 What GringottsBot Does

- Accepts commands like `/start`, `/settimezone`, and uses rich **inline keyboards**
- Stores and retrieves data from a **MySQL** database (persistent)
- Automatically **categorizes expenses** and supports **monthly reports**
- Exports to **PDF**
- Shows **statistics** like category breakdowns and trends
- Handles **time zones** for accurate logging

---

## ⚙️ Tech Stack

| Layer        | Tools Used                      |
| ------------ | ------------------------------- |
| 🧠 Bot Logic | Python + `python-telegram-bot` |
| 🗃️ Data      | MySQL                           |
| 📄 Reports   | `pandas`, `matplotlib`, `fpdf`  |
| 🌐 Hosting   | PythonAnywhere (24/7 uptime)    |

---

## 📸 Bot in Action

![GringottsBot Demo](/img/gringottsbot-demo.gif)

---

## What I Learned

- Designing and implementing a **stateful** Telegram bot  
- Setting up **persistent storage** with MySQL (FKs, indexes)  
- Working with **inline keyboards**, command handlers, and conversation flows  
- Generating **Excel/PDF** reports programmatically  
- Managing **user sessions**, time zones, and robust error handling
