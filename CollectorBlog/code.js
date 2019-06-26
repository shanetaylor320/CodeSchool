

var app = new Vue ( {
    el: "#app",

    data: {
        page: "blog",
        categories: [
            "all",
            "clothing",
            "hunting",
            "books",
            "cards",
            "coins",
            "keychains",
            "comic books",
            "misc."
        ],
        selected_category: "all",
        posts: [
            {
                title: "first post",
                author: "mr. author",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
            {
                title: "first post",
                author: "mr. author",
                category: "comic books",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
            {
                title: "first post",
                author: "mr. author",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
            {
                title: "first post",
                author: "mr. author",
                category: "hunting",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
            {
                title: "first post",
                author: "mr. author",
                category: "coins",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
            {
                title: "first post",
                author: "mr. author",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
            {
                title: "first post",
                author: "mr. author",
                category: "clothing",
                date: "today",
                image: "https://i.imgur.com/HuwV4CW.jpg",
                text: "aa;lsdk flksa;djf l;ksadjf l;sakdj fl;aksdj fl;sadkjf a;lskdjf lsdakj flasd;jf dlksj."
            },
        ]
    },

    computed: {
        sorted_posts: function() {
            if (this.selected_category == "all") {
                return this.posts;
            } else {
                var sorted_posts = this.posts.filter(function(post) {
                    return post.category == app.selected_category;
                });
                return sorted_posts;
            }
        }
    }
} )