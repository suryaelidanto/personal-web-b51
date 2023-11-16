function print(cb, name) {
    // proses apa dulu
    
    cb(name)
}

function greeting(name) {
    console.log("Halo perkenalkan nama saya :",name)
}

function greetingV2(name) {
    console.log("Let introduce myself, my name is :",name)
}
    
print(greeting, "Surya")
print(greetingV2, "Denis")
print(greeting, "Febryan")

// greeting("Surya")
// greetingV2("Febryan")
// greeting("Denis")
