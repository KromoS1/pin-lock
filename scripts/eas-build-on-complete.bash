#!/bin/bash

source ../.env;

current_datetime=$(TZ="Europe/Minsk" date +"%d/%m/%Y %H:%M")

if [ $EAS_BUILD_STATUS == 'finished' ]; then
    STATUS="🔥Удачно🔥"
else
    STATUS="❌Провалено❌"
fi

MESSAGE="$STATUS
	
   Название проекта \\- *$EXPO_PUBLIC_NAME_APP*

🚀 Время окончания \\- $current_datetime

🎩 Профиль сборки \\- *$EAS_BUILD_PROFILE* 

📱 Платформа \\- *$EAS_BUILD_PLATFORM*

📦 [Файл](https://expo.dev/accounts/$EXPO_PUBLIC_ACCOUNT/projects/$APP_NAME_EXPO/builds/$EAS_BUILD_ID)"

URL="https://api.telegram.org/bot${BOT_TOKEN}/sendMessage"

curl -s -X POST $URL -d chat_id=$CHAT_ID -d text="$MESSAGE" -d parse_mode=MarkdownV2