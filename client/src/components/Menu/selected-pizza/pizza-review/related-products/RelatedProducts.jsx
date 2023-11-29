const RelatedProducts = ({relatedProducts, setCurrentObject}) => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 400,
          behavior: 'smooth',
        });
      };
      const handleButtonClick = (e) => {
        e.preventDefault();
        scrollToTop();
      }

  return (
    <section className="related-products">
        <div className="related-products-header">
            <p>Fresh From Pizzon</p>
            <h2>RELATED PRODUCTS</h2>
        </div>
        <div className="related-products-body">
            {
                relatedProducts.map(({id, pizza_image, pizza_name, pizza_description, pizza_price, currency}) => {
                    return (
                        <div key={id} className="related-products-body-item">
                            <a onClick={handleButtonClick}>
                                <img 
                                src={pizza_image} 
                                className={`${id === 2 ? "inline" : ""}`} 
                                onClick={() => {
                                    setCurrentObject({
                                        id, pizza_image, pizza_name, pizza_description, pizza_price, currency
                                    })
                                }}/>
                            </a>
                            <a href="#">{pizza_name}</a>
                            <p>{pizza_description}</p>
                            <span>{pizza_price}</span>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default RelatedProducts
