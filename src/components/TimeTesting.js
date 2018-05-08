<div>
    <Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment>
</div>
    <div>
        <Moment format="'MMMM Do YYYY, h:mm:ss a'">
            {this.props.dateToFormat}
        </Moment>
    </div>
    <div>
        <Moment format="dddd">{this.props.dateToFormat}</Moment>
    </div>
    <div>
        <Moment format="MMM Do YY">{this.props.dateToFormat}</Moment>
    </div>
    <div>
        <Moment format="YYYY [escaped] YYYY">
            {this.props.dateToFormat}
        </Moment>
    </div>
    <div>
        <Moment format="MMM Do YY">{this.props.dateToFormat}</Moment>
    </div>
    <div>{moment("20111031", "YYYYMMDD").fromNow()}; // 7 years ago</div>
    <div>
        {"My birthday was "}
        {moment("19840329", "YYYYMMDD").fromNow()};{" "}
    </div>
    <div>{moment("20180506", "YYYYMMDD").fromNow()}; </div>
    <div>
        {"He has been sleeping there since "}
        {moment()
            .startOf("day")
            .fromNow()};
        </div>
    <div>
        {"Today will end in "}
        {moment()
            .endOf("day")
            .fromNow()};
        </div>
    <div>
        {moment()
            .startOf("hour")
            .fromNow()};
        </div>
    <div>
        {moment().format() // 2018-05-07T08:24:28+01:00
        }
    </div>
    <div>
        {moment().calendar() // Today at 8:26 AM
        }
    </div>
    <div>
        {
            "Subtract Checkout Date to CheckIn Date to get how many days difference "
        }
        {moment()
            .subtract(2, "days")
            .calendar() // Yesterday at 8:32 AM
        }
    </div>