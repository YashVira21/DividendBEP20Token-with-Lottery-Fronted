# DividendBEP20Token-with-Lottery-
A BEP20 bsc token which pays users dividends for holding The token , dividends are given in CAKE.

Contract keeps track of how many address have a buy transaction . Whichever address has more than or equal to 5 buy transactions, it becomes eligible for lottery.
Owner can call lottery and the BNB's in contract are distrbuted randomly among the set number of winners.

It also has an Upperlimit feature to stop contract for selling too much when the chart is red, this is otherwise a common issue in token that require selling by contract to work.
