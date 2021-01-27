function Item({ name, price }) {
    return (
        <div class="my-1 px-1 w-full">
            <article class="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                         {name}
                </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        {price}$
            </p>
                </header>
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p class="ml-2 text-sm">
                            cart
                </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>

    )

}

export default Item;