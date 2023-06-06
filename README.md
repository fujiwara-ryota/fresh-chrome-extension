# Fresh Chrome Extension boilerplate (Manifest V3)

## Purpose

This extension can be used as a boilerplate for creating new extensions for Chrome based browsers, like Google Chrome.

## What it does

When installed it will write something to DevTools console (F12) at the three most common events: before page load, after page load and when the user clicks the extension button on browser top bar.

## インストール方法

1. chrome://extensions　アドレスバーに追加
2. デベロッパーモードON
3. パッケージ化されていない拡張機能を読み込む
4. このリポジトリのディレクトリを選択

## 開発方法

after.jsがページロード後に実行されるので処理を記載します。

初期記述

1. {host_name} 変更 => 起動ドメインを設定可能
2. {.target_class} 変更 => ターゲットのセレクタを選択
3. ターゲットのテキストに代理アカウントの文字列ありなしで、付与するクラス名を変更
4. after.cssでスタイルを調整

