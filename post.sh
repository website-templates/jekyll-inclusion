cp -a publ/pages/_drafts/_draft.md publ/pages/_posts/$@.md;
sed -i "s/_PATH/$@/g" "$(pwd -W | sed  's/\//\\/g')\publ\pages\_posts\\$@.md";
explorer "$(pwd -W | sed  's/\//\\/g')\publ\pages\_posts\\$@.md";
mkdir publ/img/post/$@;
mkdir publ/img/post/$@/meta;
explorer "$(pwd -W | sed  's/\//\\/g')\publ\img\post\\$@";
