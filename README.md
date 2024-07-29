# Stardew Valley Tracker
This application can be used to track and plan your Stardew Valley game file. The tracker is most effective in the early game, where planning is essential and it is easy to get disorganized

# Calendar
The main page is a calendar where you can add notes to each day. In order to create notes, first click on the day, which will toggle the modal. From there, you can add, edit, or delete notes. When a villager's birthday is on the day, you will be able to see their affinities (what they love, like, dislike, hate, and feel neutrally towards)

# Calculator
The calculator page is a fast way to calculate the value of the items in your inventory. The page is divided into sections: fish (where you can add the amount of each fish quality you have, for example a gold quality carp versus a silver quality carp) and other items (divided into gems, minerals, and geodes). You can also reset each subsection or the entire page

# Universal Affinities
The universal affinities page displays how villagers generally feel when given certain gifts. For example, almost everybody loves a Prismatic Shard, so it is considered a universal love. Conversely, almost everybody hates poppy, so it is considered a universal hate. This page is useful for gifting items to villagers, especially if you forgot about birthdays, or it is Saturday and you haven't gifted a certain villager in the given week

# Villager Directory
The villager directory page displays information about each villager. Click the villager, and you will see their name, birthday, affinities, and schedule

# Technology
This application is built using React, and deployed to Vercel in a Docker container. There are no network requests that are made. Instead, the data is stored in [this file](https://github.com/bfreud94/stardew-tracker/blob/main/src/api/index.ts). When developing, I didn't think it was worth while finding a server where I can consume the data, or develop one myself

Please reach out to me if you have any questions. Thank you for your support!