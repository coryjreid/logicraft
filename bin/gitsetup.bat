git init
git remote add origin "git@github.com:coryjreid/logicraft.git"
git fetch
git reset --hard origin/master
git branch --set-upstream-to=origin/master master
git pull