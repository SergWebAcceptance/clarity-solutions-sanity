"use client";
import { RevealWrapper, RevealList } from "next-reveal";
import Link from "next/link";

const TariffsSecond = () => {
  return (
    <>
      <section className="tariffs-second">
        <div className="_container">
          <div className="tariffs-second__body">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Cost</th>
                  <th>Unit</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="subtitle">
                    Card Account
                  </td>
                </tr>

                <tr>
                  <td>Initial Card Order</td>
                  <td>€25.00</td>
                  <td>Per Card</td>
                  <td>One-time fee for the first card order.</td>
                </tr>

                <tr>
                  <td>
                    Physical card issuance <br />
                    (Chip + PayPass)
                  </td>
                  <td>€150.00</td>
                  <td>Per Card</td>
                  <td>
                    One-time charge for plastic card issuance. Standard fees
                    will apply thereafter.
                  </td>
                </tr>

                <tr>
                  <td>Monthly Account Maintenance</td>
                  <td>€25.00</td>
                  <td>Per Month</td>
                  <td>Deducted from available balance monthly.</td>
                </tr>

                <tr>
                  <td>Yearly Account Maintenance</td>
                  <td>
                    <span>FREE</span>
                  </td>
                  <td>Every Year</td>
                  <td>There is no charge for annual maintenance.</td>
                </tr>

                <tr>
                  <td>Card Top-Up Fee </td>
                  <td>2%</td>
                  <td>Per Transfer</td>
                  <td>Fee for adding funds to your card.</td>
                </tr>

                <tr>
                  <td>Clarity Solutions Client Help</td>
                  <td>
                    <span>FREE</span>
                  </td>
                  <td>All the Time</td>
                  <td>
                    Assistance is provided to Clarity Solutions clients at no
                    cost.
                  </td>
                </tr>

                <tr>
                  <td colSpan={4} className="subtitle">
                    Transaction
                  </td>
                </tr>

                <tr>
                  <td>Minimal Transfer Amount</td>
                  <td>€5.000</td>
                  <td>Per Transfer per Wallet (not a card)</td>
                  <td>Minimum transfer amounts apply per wallet.</td>
                </tr>

                <tr>
                  <td>Maximum Transfer Amount</td>
                  <td>€50.000</td>
                  <td>Per Transfer per Wallet (not a card)</td>
                  <td>Maximum transfer amounts apply per wallet.</td>
                </tr>

                <tr>
                  <td>Minimum Payment Amount</td>
                  <td>€1.00</td>
                  <td>Per Payment</td>
                  <td>Minimum payment amount required per transaction.</td>
                </tr>

                <tr>
                  <td>Maximum Payment Amount </td>
                  <td>€50.000</td>
                  <td>Per Payment</td>
                  <td>
                    Payments above 5k EUR could require additional verification.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <RevealWrapper delay={100} origin="bottom">
            <div className="need-help">
              <h2>Have questions?</h2>
              <Link href="/contacts" className="black-button">
                Contact Us
              </Link>
            </div>
          </RevealWrapper>
        </div>
      </section>
    </>
  );
};
export default TariffsSecond;
