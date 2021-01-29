function Item({ name, price, image }) {
    return (
        <div className="my-1 px-1 w-full">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                    <img alt="..."  className="block h-auto w-full" src={image} />
                   </a> 

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                         {name}
                </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {price}$
                    </p>
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p className="ml-2 text-sm">
                            cart
                </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>
            </article>
        </div>

    )

}

export default Item;