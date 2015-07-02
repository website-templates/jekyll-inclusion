cp -a pages/_drafts/_draft.md pages/_posts/$@.md;
sed -i "s/_PATH/$@/g" "$(pwd -W | sed  's/\//\\/g')\pages\_posts\\$@.md";
explorer "$(pwd -W | sed  's/\//\\/g')\pages\_posts\\$@.md";
mkdir img/post/$@;
mkdir img/post/$@/meta;
explorer "$(pwd -W | sed  's/\//\\/g')\img\post\\$@";
