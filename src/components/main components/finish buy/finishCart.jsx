import "../../../style/main-finish/singleFinish.css"

function FinishCart({title, photo, quantity, subTotal, _id, description}) {
    return (
        <div className="finish-cart">
            <img className="finish-img" src={photo}/>
            <section className="finish-info">
                <section className="info-product">
                <h3>{title}</h3>
                <h3>The quantity of: {quantity}</h3>
                <h3>${subTotal}</h3>
                <p className="_id">{_id}</p>
                </section>
                <h3 className="finish-description">
                    {description}
                </h3>
            </section>
        </div>
    )
}

export default FinishCart