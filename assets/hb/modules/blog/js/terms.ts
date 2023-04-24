(() => {
    const list = document.querySelector('.hb-terms-posts') as HTMLElement

    const form = document.querySelector('.hb-terms-filter-form')
    if (!list || !form) {
        return
    }

    const search = () => {
        const attrs: Array<string> = []
        form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked').forEach((el) => {
            if (el.getAttribute('data-attr')) {
                attrs.push(`[data-${el.getAttribute('data-attr')}]`)
            }
        })
        list.querySelectorAll('style').forEach((style) => {
            style.remove()
        })
        if (attrs.length > 0) {
            list.classList.add('filter-active')
            const style = document.createElement('style')
            style.classList.add('hb-terms-filter-style')
            style.innerText = `.hb-terms-posts-post${attrs.join("")} { display: block !important; }`
            list.appendChild(style)
        } else {
            list.classList.remove('filter-active')
        }
    }

    form.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            search()
        })
    })
})()
