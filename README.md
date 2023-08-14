# &lt;Logicraft_&gt;

A Minecraft: Java modpack!

## About

This modpack is built around the idea of using _logic_ to control the world
around you! Utilize many machines and computers to generate everything you need
autonomously! Make sure to remember your edge cases so things don't backup on
you when you least expect it.

This is a custom-made modpack that my friends and I play on a server I host at
home. This modpack's focus is our entertainment. It may undergo vast
periods of time with little attention. It is released publicly only so that it
is easy for my friends to install using the Twitch launcher and is not generally
expected to be a popular public pack like FTB. But, please feel free to
contribute if you find issues!

## How to Play with MultiMC

1. Download [Adoptium OpenJDK (Java) 17+](https://adoptium.net/)
2. Download [MultiMC](https://multimc.org/)
3. Download [packwiz-installer-bootstrap](https://github.com/packwiz/packwiz-installer-bootstrap/releases)
4. Install Java (defaults are fine)
5. Extract MultiMC and place it someplace safe  
   Note: It's recommended to make a shortcut to the executable someplace convenient
6. Open the MultiMC folder and then launch the MultiMC executable  
   Note: If it's your first time opening, continue with step 6.1 below:
    1. Choose your language, click `Next`
    2. Select the Java you installed previously
    3. Set *max* memory to `8192 MiB`
    4. Set *min* memory to `4096 MiB`, click `Next`
    5. Enabled or disable analytics as you desire, click `Finish`  
       Note: When you finish the remaining steps and go to launch the game it will require you to sign into a Microsoft account - do this
7. Click `Add Instance`
8. Name the instance `Logicraft` (or something else if you prefer)
9. Choose Minecraft version `1.19.2`, click `OK`
10. `Right-click` your new instance, select `Edit Instance`
11. Select the `Version` tab on the left
12. Click `Install Forge` on the right
13. Select version `43.2.21`, click `OK`
14. Select the `Settings` tab on the left
15. Select the `Custom commands` tab on the top-right
16. Check the `Custom Commands` box to enable the fields
17. In the `Pre-launch command` field enter the following *exactly*:  
    `"$INST_JAVA" -jar packwiz-installer-bootstrap.jar https://logicraft.coryjreid.com/pack.toml`
18. Click `Servers` on the left
19. Click `Add` at the top-right
20. Change the `Name` near the bottom to `Logicraft`
21. Change the `Address` to `logicraft.coryjreid.com`
22. Cut or copy the `packwiz-installer-bootstrap.jar` file you downloaded to your clipboard
23. Select the `Version` tab at the top-left
24. Click the `Open .minecraft` buttom at the bottom-right
25. Paste the `packwiz-installer-bootstrap.jar` file into the opened folder, then close the folder
26. Back in MultiMC, click `Close` at the bottom-right

You are now ready to launch the game. Upon doing so, if you are prompted to login to a Microsoft/Mojang account go ahead and log into a *Microsoft* account.

## Changelog

I maintain a separate changelog documenting changes for each version of the modpack. Please checkout [CHANGELOG.md](CHANGELOG.md) to view this.

## Contributing

Open a pull request to report any issues. Please include as much detail as
possible including screenshots if appropriate! PRs lacking effort may be ignored
(closed) without response.
