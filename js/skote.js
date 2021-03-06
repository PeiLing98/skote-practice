new Vue ({

    el:'#app',

    data:
    {
        sideMenuList:['Orders','Revenue','Average Price','Top Selling Product','Activity','Latest Transaction Table'],

        orders: 
        [
            {
                title: "Orders",
                quantity: "1,452",
                percentage: "+0.2%",
                period: "From previous period"
            }
        ],

        revenue:
        [
            {
                title: "Revenue",
                total: "$ 28,452",
                percentage: "+0.2%",
                period: "From previous period"
            }
        ],

        averagePrice:
        [
            {
                title: "Average Price",
                total: "$ 16.2",
                percentage: "0%",
                period: "From previous period"
            }
        ],

        selectedMonth: 'Jan',

        monthDisplay:['Jan','Dec','Nov','Oct'],

        product:
        [
            {
                name: "Product A",
                total: "$ 6385",
                percentage: "0.6%",
                period: "From previous period"
            }
        ],

        SalesA:
        [
            {
                productName: 'Product A',
                productSubName: 'Neque quis est',
                salesPercentage: '37 %'
            }
        ],

        SalesB:
        [
            {
                productName: 'Product B',
                productSubName: 'Quis autem iure',
                salesPercentage: '72 %'
            }
        ],

        SalesC:
        [
            {
                productName: 'Product C',
                productSubName: 'Sed aliquam mauris',
                salesPercentage: '54 %'
            }
        ],

        activity1:
        [
            {
                date: '22 Nov',
                details: 'Responded to need "Volunteer Activities"'
            }
        ],

        activity2:
        [
            {
                date: '17 Nov',
                details: 'Everyone realizes why a new common language would be desirable...'
            }
        ],

        activity3:
        [
            {
                date: '15 Nov',
                details: 'Joined the group "Boardsmanship Forum"'
            }
        ],

        activity4:
        [
            {
                date: '12 Nov',
                details: 'Responded to need "In-Kind Opportunity"'
            }
        ],

        transactionList:['Order ID','Billing Name','Date','Total','Payment Status','Payment Method','View Details'],

        transaction1:
        [
            {
                orderID: '#SK2540',
                billingName: 'Neal Matthews',
                date: '7 Oct, 2019',
                total: '$400',
                paymentStatus: 'Paid',
                paymentMethod: 'Mastercard'
            }
        ],

        transaction2:
        [
            {
                orderID: '#SK2541',
                billingName: 'Jamal Burnett',
                date: '7 Oct, 2019',
                total: '$380',
                paymentStatus: 'Chargeback',
                paymentMethod: 'Visa'
            }
        ],

        transaction3:
        [
            {
                orderID: '#SK2542',
                billingName: 'Juan Mitchell',
                date: '6 Oct, 2019',
                total: '$384',
                paymentStatus: 'Paid',
                paymentMethod: 'Paypal'
            }
        ],

        transaction4:
        [
            {
                orderID: '#SK2543',
                billingName: 'Barry Dick',
                date: '5 Oct, 2019',
                total: '$412',
                paymentStatus: 'Paid',
                paymentMethod: 'Mastercard'
            }
        ],

        transaction5:
        [
            {
                orderID: '#SK2544',
                billingName: 'Ronald Taylor',
                date: '4 Oct, 2019',
                total: '$404',
                paymentStatus: 'Refund',
                paymentMethod: 'Visa'
            }
        ],

        transaction6:
        [
            {
                orderID: '#SK2545',
                billingName: 'Jacob Hunter',
                date: '4 Oct, 2019',
                total: '$392',
                paymentStatus: 'Paid',
                paymentMethod: 'Paypal'
            }
        ]
    
    }

});



