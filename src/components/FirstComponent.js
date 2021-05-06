import React from 'react'

function FirstComponent() {
    return (
        <div>
            <br />
            
            <div className="average-subText" style={{textAlign:"center"}}>
                <span className="subText-heading">Best Price to Trade</span>
            </div>

            <div style={{padding:"0px 30px"}} className="text-center">

                <div className="average-header-maintext color-green">
                    0.12
                    %
                </div>

                <div className="average-header-subHeading">
                    5 Mins
                </div>

            </div>



            <div style={{padding:"0px 30px"}} className="text-center">

                <div className="average-header-maintext color-green">
                    0.87
                    %
                </div>

                <div className="average-header-subHeading">
                    1 Hour
                </div>

            </div>


            

            <div className="average-heading" style={{paddingBottom:"15px"}}>
                ₹
                43,82,501
            </div>

            <div className="average-subText text-move">
                Average
                BTC
                /
                INR
                net price including commission
            </div>


            <div style={{padding:"0px 30px"}} className="text-center">

                <div className="average-header-maintext1 color-green">
                    10.65
                    %
                </div>

                <div className="average-header-subHeading1">
                    1 Day
                </div>

            </div>

            <div style={{padding:"0px 30px"}} className="text-center">

                <div className="average-header-maintext2 color-green">
                    12.91
                    %
                </div>

                <div className="average-header-subHeading2">
                    7 Days
                </div>

            </div>   

            
                     

        </div>
    )
}

export default FirstComponent
