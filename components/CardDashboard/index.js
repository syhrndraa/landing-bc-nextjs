/* eslint-disable @next/next/no-img-element */
import React from 'react';
import moment from 'moment';
import CardTitle from '../CardTitle';
import Link from 'next/link';
import { formatDate } from '../../utils/formatDate';

export default function CardDashboard({ data }) {
  return (
    <section className="grow-today bgdash">
      <div className="container">
        <div className="mt-5 row gap">
          {data.map((data, index) => (
            <div className="col-lg-3 col-md-6 col-12" key={index}>
              <div className="card-grow h-100">
                <div className="card-content">
                  <span className="badge-pricing">{data.status}</span>
                  <div className="card-title orderhist">
                    {data.historyEvent.title}
                  </div>
                  <div className="card-subtitle">
                    {data.historyEvent.tagline}
                  </div>
                  <div className="description align-items-center gap-3">
                    {data.historyEvent.venueName}
                    <br></br>
                    {formatDate(data.date)},{' '}
                    {moment(data.historyEvent.date).format('HH.MM A')}
                    <br></br>
                    <br></br>
                    Total Payment : Rp. {data.totalPay}
                  </div>
                  {/* <Link href={`/detail/${data._id}`} legacyBehavior>
                    <a className="stretched-link"></a>
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
