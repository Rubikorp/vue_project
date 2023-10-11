const blockDetails = {
    data() {
        return {
            currenDetails: [
                {
                    tag: "Kitchen",
                    date: "26 December,2022 ",
                    title: "Let’s Get Solution for Building\n" +
                        "Construction Work",
                    img1: `img/block-details/art-1.png`,
                    text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                    quote: "The details are not the details. They make the design.",
                    title2: "The details are not the details. They make the design.",
                    text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                    img2: "img/block-details/art-1-1.png",
                    text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                },
            ],
            tags: [
                {tag: 'Kitchen', isActive: true, id: 1},
                {tag: 'Bedroom', isActive: false, id: 2},
                {tag: 'Building', isActive: false, id: 3},
                {tag: 'Architecture', isActive: false, id: 4},
                {tag: 'Kitchen Planning', isActive: false, id: 5},
                {tag: 'Bedroom', isActive: false, id: 6},
            ],
            details:
                [
                    {
                        tag: "Kitchen",
                        date: "26 December,2022 ",
                        title: "Let’s Get Solution for Building\n" +
                            "Construction Work",
                        img1: `img/block-details/art-1.png`,
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        quote: "The details are not the details. They make the design.",
                        title2: "The details are not the details. They make the design.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                        img2: "img/block-details/art-1-1.png",
                        text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    },
                    {
                        tag: "Bedroom",
                        date: "26 December,2022 ",
                        title: "Let’s Get Solution for Building\n" +
                            "Это Bedroom",
                        img1: `img/moder_kitch_img1.png`,
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        quote: "The details are not the details. They make the design.",
                        title2: "The details are not the details. They make the design.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                        img2: "img/moder_kitch_img1.png",
                        text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    },
                    {
                        tag: "Building",
                        date: "26 December,2022 ",
                        title: "Let’s Get Solution for Building\n" +
                            "Это Building",
                        img1: `img/moder_kitch_img2.png`,
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        quote: "The details are not the details. They make the design.",
                        title2: "The details are not the details. They make the design.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                        img2: "img/moder_kitch_img2.png",
                        text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    },
                    {
                        tag: "Architecture",
                        date: "26 December,2022 ",
                        title: "Let’s Get Solution for Building\n" +
                            "Это Architecture",
                        img1: `img/block-details/art-1.png`,
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        quote: "The details are not the details. They make the design.",
                        title2: "The details are not the details. They make the design.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                        img2: "img/block-details/art-1-1.png",
                        text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    },
                    {
                        tag: "Kitchen Planning",
                        date: "26 December,2022 ",
                        title: "Let’s Get Solution for Building\n" +
                            "Это Kitchen Planning",
                        img1: `img/block-details/art-1.png`,
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        quote: "The details are not the details. They make the design.",
                        title2: "The details are not the details. They make the design.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                        img2: "img/block-details/art-1-1.png",
                        text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    },
                    {
                        tag: "Bedroom",
                        date: "26 December,2022 ",
                        title: "Let’s Get Solution for Building\n" +
                            "Это Bedroom",
                        img1: `img/block-details/art-1.png`,
                        text1: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
                        quote: "The details are not the details. They make the design.",
                        title2: "The details are not the details. They make the design.",
                        text2: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                        item: ["Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.", "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered."],
                        img2: "img/block-details/art-1-1.png",
                        text3: "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
                    },
                ]
        }
    },
    methods: {
        changeButton(id) {
            for (let i = 0; i < this.tags.length; i++) {
                if (this.tags[i].id === id) {
                    this.tags[i].isActive = true
                    this.currenDetails = this.details.filter((detail) => detail.tag === this.tags[i].tag)
                } else if (this.tags[i].isActive === true) {
                    this.tags[i].isActive = false
                }
            }
        }
    },
    template: `
    <div class="details">
            <article class="art-det" v-for="detail in currenDetails">
                <h2 class="art-det__head">{{ detail.title }}</h2>
                <img :src="detail.img1" alt="" class="art-det__img">
                <div class="art-det__date-tags">
                    <p class="art-det__date">
                        {{ detail.date }}
                    </p>
                    <p class="art-det__tags">
                        Interior / Home / Decore
                    </p>
                </div>
                <p class="art-det__dsc">
                    {{ detail.text1 }}
                </p>
                <div class="quote">
                    <span class="quote__span">
                        “
                    </span>
                    <p class="quote__dsc">
                        {{ detail.quote }}
                    </p>
                </div>
                <h2 class="art-det__head two-head-mb">{{ detail.title2 }}</h2>
                <p class="art-det__dsc">
                    {{ detail.text2 }}
                </p>
                <ol class="art-det__list">
                    <li class="art-det__item" v-for="item in detail.item">{{ item }}</li>
                </ol>
                <img :src="detail.img2" alt="" class="art-det__img img2-mb">
                <p class="art-det__dsc">
                    {{ detail.text3 }}
                </p>
            </article>
    </div>
        <aside class="tags">
            <h3 class="tags__head">Tags</h3>
            <ul class="tags__list">
                <li
                        class="tags__item"
                        v-for="tag in tags">
                    <button
                            :class="[ tag.isActive ? 'active' : '' ] + ' ' + 'tags__button'"
                            :id="tag.id"
                            @click="changeButton(tag.id)"
                    >
                        {{ tag.tag }}
                    </button>
                </li>
            </ul>
        </aside>
    `,
}