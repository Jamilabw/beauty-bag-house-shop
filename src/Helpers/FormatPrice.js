const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price * 95.72);
}

export default FormatPrice;