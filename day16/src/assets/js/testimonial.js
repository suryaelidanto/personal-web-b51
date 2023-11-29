// class Testimonial {
//     constructor(name, review, image) {
//         this.name = name
//         this.review = review
//         this.image = image
//     }

//     html() {
//         return `
//             <div class="testimonial">
//                 <img src="${this.image}" class="profile-testimonial" />
//                 <p class="quote">"${this.review}"</p>
//                 <p class="author">- ${this.name}</p>
//             </div>
//         `
//     }
// }

// // class AuthorTestimonial extends Testimonial {
// //     constructor(author, review, image) {
// //         super(author, review, image)
// //         this.author = author
// //     }


// // }

// // class CompanyTestimonial extends Testimonial {
// //     constructor(author, review, image) {
// //         super(author, review, image)
// //         this.author = author
// //     }


// // }

// const testimonial1 = new Testimonial("Bayu", "Saya bangga dengan Chelsea", "https://images.pexels.com/photos/3754285/pexels-photo-3754285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
// const testimonial2 = new Testimonial("Hima", "Saya bangga dengan City", "https://images.pexels.com/photos/3468827/pexels-photo-3468827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
// const testimonial3 = new Testimonial("Tayo", "Saya malu dengan MU", "https://images.pexels.com/photos/936019/pexels-photo-936019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")

// const testimonials = [testimonial1, testimonial2, testimonial3]

// let testimonialHTML = ``
// for(let index = 0; index < testimonials.length; index++) {
//     testimonialHTML += testimonials[index].html()
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML

const testimonialData = [
    {
        author: "Naufal",
        content: "Keren banget jasanya! Top notch!",
        image: "https://images.pexels.com/photos/3754285/pexels-photo-3754285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 5,
    },
    {
        author: "Novri",
        content: "Keren banget!",
        image: "https://images.pexels.com/photos/3754285/pexels-photo-3754285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 5
    },
    {
        author: "Denis",
        content: "Apasih bang!",
        image: "https://images.pexels.com/photos/3468827/pexels-photo-3468827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 1
    },
    {
        author: "Febry",
        content: "Oke deh!",
        image: "https://images.pexels.com/photos/3468827/pexels-photo-3468827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        rating: 4
    }
]

function html(item) {
    return `<div class="testimonial">
    <img src="${item.image}" class="profile-testimonial" />
    <p class="quote">"${item.content}"</p>
    <p class="author">- ${item.author}</p>
    <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
</div>`
}

function allTestimonials() {
    let testimonialHTML = ``
    testimonialData.forEach((item) => {
        testimonialHTML += html(item)
    })

    document.getElementById("testimonials").innerHTML = testimonialHTML
}

allTestimonials()

function filterTestimonials(rating) {
    let testimonialHTML = ``
    const testimonialFiltered = testimonialData.filter((item) => {
        return item.rating === rating
    })

    if (testimonialFiltered.length === 0) {
        testimonialHTML = `<h3> Data not found! </h3>`
    } else {
        testimonialFiltered.forEach((item) => {
            testimonialHTML += html(item)
        })
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML
}