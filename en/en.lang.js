export const transError = {
    cateErrSave: "",
    directory_cate_title: "Category ",
}
export const transSuccess = {

}
export const transMail = {
        subject: "Thông tin đơn hàng của bạn",
        //để tao nói đã, cái này là cái biểu mẫu tao code để gửi gmal khi đặt hàng thành công
        // vấn đề là nếu mà thả dữ liệu như bt thì đc còn trong dấu {} thì die
        templeate: function(dataCart) {
                return `
        <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
            <tbody>
                <tr>
        <td align="center" valign="top">
        <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="600"
                id="m_-3596561289758577561template_container"
                style="background-color: #ffffff; border: 1px solid #dedede; border-radius: 3px;"
            >
                <tbody>
                    <tr>
                        <td align="center" valign="top">
                            <table
                                border="0"
                                cellpadding="0"
                                cellspacing="0"
                                width="600"
                                id="m_-3596561289758577561template_header"
                                style="
                                    background-color: #3b89d2;
                                    color: #ffffff;
                                    border-bottom: 0;
                                    font-weight: bold;
                                    line-height: 100%;
                                    vertical-align: middle;
                                    font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
                                    border-radius: 3px 3px 0 0;
                                "
                            >
                                <tbody>
                                    <tr>
                                        <td id="m_-3596561289758577561header_wrapper" style="padding: 36px 48px; display: block;">
                                            <h1
                                                style="
                                                    font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
                                                    font-size: 30px;
                                                    font-weight: 300;
                                                    line-height: 150%;
                                                    margin: 0;
                                                    text-align: left;
                                                    color: #ffffff;
                                                "
                                            >
                                                Cảm ơn bạn đã đặt hàng
                                            </h1>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" valign="top">
                            <table border="0" cellpadding="0" cellspacing="0" width="600" id="m_-3596561289758577561template_body">
                                <tbody>
                                    <tr>
                                        <td valign="top" id="m_-3596561289758577561body_content" style="background-color: #ffffff;">
                                            <table border="0" cellpadding="20" cellspacing="0" width="100%">
                                                <tbody>
                                                    <tr>
                                                        <td valign="top" style="padding: 48px 48px 32px;">
                                                            <div
                                                                id="m_-3596561289758577561body_content_inner"
                                                                style="
                                                                    color: #636363;
                                                                    font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
                                                                    font-size: 14px;
                                                                    line-height: 150%;
                                                                    text-align: left;
                                                                "
                                                            >
                                                                <p style="margin: 0 0 16px;">Xin chào ${dataCart.username},</p> 
                                                                <p style="margin: 0 0 16px;">
                                                                    Đơn hàng đã được đặt thành công và chúng tôi đang xử lý
                                                                </p>
                                                                <span class="im">
                                                                    <p style="margin: 0 0 16px;">Thanh toán COD: trả tiền mặt khi giao hàng</p>
                                                                </span>
                                                                <h2
                                                                    style="
                                                                        color: #3b89d2;
                                                                        display: block;
                                                                        font-family: 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif;
                                                                        font-size: 18px;
                                                                        font-weight: bold;
                                                                        line-height: 130%;
                                                                        margin: 0 0 18px;
                                                                        text-align: left;
                                                                    "
                                                                >
                                                                    [Đơn hàng #238] (29 Tháng Sáu, 2020)
                                                                </h2>

                                                                <div style="margin-bottom: 40px;">
                                                                    <table
                                                                        cellspacing="0"
                                                                        cellpadding="6"
                                                                        border="1"
                                                                        style="
                                                                            color: #636363;
                                                                            border: 1px solid #e5e5e5;
                                                                            vertical-align: middle;
                                                                            width: 100%;
                                                                            font-family: 'Helvetica Neue', Helvetica, Roboto, Arial,
                                                                                sans-serif;
                                                                        "
                                                                    >
                                                                        <thead>
                                                                            <tr>
                                                                                <th
                                                                                    scope="col"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Sản phẩm
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Số lượng
                                                                                </th>
                                                                                <th
                                                                                    scope="col"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Giá :
                                                                                </th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>

                                                                        ${dataCart.listCart.map((item) => {
                                                                            return `<tr>
                                                                                <td>${item.title}</td>
                                                                                <td>${item.soluong}</td>
                                                                                <td>${item.totalPriceItem}</td>
                                                                            </tr>         
                                                                        `;
                                                                        })}   
                                                                        </tbody>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <th
                                                                                    scope="row"
                                                                                    colspan="2"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Phương thức thanh toán:
                                                                                </th>
                                                                                <td
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Trả tiền mặt khi nhận hàng
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th
                                                                                    scope="row"
                                                                                    colspan="2"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                        border-top-width: 4px;
                                                                                    "
                                                                                >
                                                                                    Tổng số lượng:
                                                                                </th>
                                                                                <td
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                        border-top-width: 4px;
                                                                                    "
                                                                                >
                                                                                    <span>${dataCart.totalQty}<span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th
                                                                                    scope="row"
                                                                                    colspan="2"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Tổng tiền:
                                                                                </th>
                                                                                <td
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    <span>${
                                                                                        dataCart.totalPrice
                                                                                    }</span>&nbsp;<span>VND</span>
                                                                                </td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th
                                                                                    scope="row"
                                                                                    colspan="2"
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Lưu ý:
                                                                                </th>
                                                                                <td
                                                                                    style="
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                        vertical-align: middle;
                                                                                        padding: 12px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    ${dataCart.address}
                                                                                </td>
                                                                            </tr>
                                                                        </tfoot>
                                                                    </table>
                                                                </div>

                                                                <table
                                                                    id="m_-3596561289758577561addresses"
                                                                    cellspacing="0"
                                                                    cellpadding="0"
                                                                    border="0"
                                                                    style="
                                                                        width: 100%;
                                                                        vertical-align: top;
                                                                        margin-bottom: 40px;
                                                                        padding: 0;
                                                                    "
                                                                >
                                                                    <tbody>
                                                                        <tr>
                                                                            <td
                                                                                valign="top"
                                                                                width="50%"
                                                                                style="
                                                                                    text-align: left;
                                                                                    font-family: 'Helvetica Neue', Helvetica, Roboto, Arial,
                                                                                        sans-serif;
                                                                                    border: 0;
                                                                                    padding: 0;
                                                                                "
                                                                            >
                                                                                <h2
                                                                                    style="
                                                                                        color: #3b89d2;
                                                                                        display: block;
                                                                                        font-family: 'Helvetica Neue', Helvetica, Roboto,
                                                                                            Arial, sans-serif;
                                                                                        font-size: 18px;
                                                                                        font-weight: bold;
                                                                                        line-height: 130%;
                                                                                        margin: 0 0 18px;
                                                                                        text-align: left;
                                                                                    "
                                                                                >
                                                                                    Địa chỉ thanh toán
                                                                                </h2>

                                                                                <address
                                                                                    style="
                                                                                        padding: 12px;
                                                                                        color: #636363;
                                                                                        border: 1px solid #e5e5e5;
                                                                                    "
                                                                                >
                                                                                    ${dataCart.username}<br />${dataCart.address}<br/>${
            dataCart.phoneNumber
        } <br /><a
                                                                                        href="mailto:${dataCart.email}"
                                                                                        target="_blank"
                                                                                        >${dataCart.email}</a
                                                                                    >
                                                                                </address>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
            </td>
                </tr>
            </tbody>
        </table>
        `;
    },
};