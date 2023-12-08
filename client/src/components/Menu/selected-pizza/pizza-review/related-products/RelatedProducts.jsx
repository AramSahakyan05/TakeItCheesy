const RelatedProducts = ({relatedProducts, setCurrentObject, setActive}) => {

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
                relatedProducts.map(({_id, image, name, description, price, currency}) => {
                    const {$numberDecimal} = price;
                    return (
                        <div key={_id} className="related-products-body-item">
                            <a onClick={handleButtonClick}>
                                <img 
                                src={require(`../../../../../assets/header-images/menu-list-images/${image}`)} 
                                onClick={() => {
                                    setCurrentObject({
                                        _id, image, name, description, price, currency
                                    });
                                    setActive(name)
                                }}/>
                            </a>
                            <a href="#">{name.toUpperCase()}</a>
                            <p>{description}</p>
                            <span>{$numberDecimal} <span>{currency}</span> </span>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default RelatedProducts
