function Slider (sliderID) {
    this.element = document.getElementById(sliderID)
    this.duration = 10
    this.element.innerHTML = this.element.innerHTML + this.element.innerHTML
}
Slider.prototype.start = function () {
    const slider = this.element
    this.interval = setInterval(function () {
        if (slider.scrollLeft > slider.scrollWidth / 2) {
            slider.scrollLeft = 0
        } else {
            slider.scrollLeft++
        }
    }, this.duration)
}
Slider.prototype.stop = function () {
    if (this.interval) {
        clearInterval(this.interval)
    }
}