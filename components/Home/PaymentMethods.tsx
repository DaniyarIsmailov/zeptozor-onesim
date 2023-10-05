import Method from "../PaymentMethod";


export default function PaymentMethods() {
    return (
        <div className='w-full flex flex-wrap items-center justify-center bg-bg px-20 sm:px-80 gap-10 sm:gap-20 py-20 sm:py-40'>
            <Method icon='stripe' />
            <Method icon='visa' />
            <Method icon='mastercard' />
            <Method icon='amex' />
            <Method icon='discover' />
            <Method icon='o' />
            <Method icon='jcb' />
            <Method icon='unionpay' />
            <Method icon='googlepay' />
            <Method icon='applepay' />
        </div>
    )
}