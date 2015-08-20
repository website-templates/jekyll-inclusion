cp -a _publ/pages/_drafts/_draft.md _publ/pages/_posts/$@.md;
sed -i "s/_PATH/$@/g" "$(pwd -W | sed  's/\//\\/g')\_publ\pages\_posts\\$@.md";
explorer "$(pwd -W | sed  's/\//\\/g')\_publ\pages\_posts\\$@.md";
mkdir _publ/img/post/$@;
mkdir _publ/img/post/$@/meta;
explorer "$(pwd -W | sed  's/\//\\/g')\_publ\img\post\\$@";
