import React from 'react';
import '../CSS/Info.css'

export default function Insurance() {
  return (
    <>
      <div className='mcontainer'>
        <div className='mcontentbar'>
          <h3>Table of Content</h3>
          <ol>
            <li>
              <a href='#1'>What is Insurance?</a><br />
            </li>
            <li>
              <a href='#2'>How Insurance Works</a><br />
            </li>
            <li>
              <a href='#3'>Insurance Policy Components</a><br />
              <ul>
                <li>
                  <a href='#4'>Premium</a><br />
                </li>
                <li>
                  <a href='#5'>Policy Limit</a><br />
                </li>
                <li>
                  <a href='#6'>Deductible</a><br />
                </li>
                <li>
                  <a href='#7'>Special Considerations</a><br />
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <div className='mcontent'>
          <h1 id='1'>What is Insurance?</h1>
          <p>Insurance is a contract, represented by a policy, in which an individual or entity receives financial protection or reimbursement against losses from an insurance company. The company pools clients' risks to make payments more affordable for the insured.</p>
          <p>Insurance policies are used to hedge against the risk of financial losses, both big and small, that may result from damage to the insured or her property, or from liability for damage or injury caused to a third party.</p>

          <h1 id='2'>How Insurance Works</h1>
          <p>There is a multitude of different types of insurance policies available, and virtually any individual or business can find an insurance company willing to insure them—for a price. The most common types of personal insurance policies are auto, health, homeowners, and life. Most individuals in the United States have at least one of these types of insurance, and car insurance is required by law.</p>
          <p>Businesses require special types of insurance policies that insure against specific types of risks faced by a particular business. For example, a fast-food restaurant needs a policy that covers damage or injury that occurs as a result of cooking with a deep fryer. An auto dealer is not subject to this type of risk but does require coverage for damage or injury that could occur during test drives.</p>
          <p>There are also insurance policies available for very specific needs, such as kidnap and ransom (K&R), medical malpractice, and professional liability insurance, also known as errors and omissions insurance.</p>

          <h1 id='3'>Insurance Policy Components</h1>
          <p>When choosing a policy, it is important to understand how insurance works.</p>
          <p>A firm understanding of these concepts goes a long way in helping you choose the policy that best suits your needs. For instance, whole life insurance may or may not be the right type of life insurance for you. There are three components of any type of insurance (premium, policy limit, and deductible) that are crucial.</p>

          <h2 id='4'>Premium</h2>
          <p>A policy's premium is its price, typically expressed as a monthly cost. The premium is determined by the insurer based on your or your business's risk profile, which may include creditworthiness.</p>
          <p>For example, if you own several expensive automobiles and have a history of reckless driving, you will likely pay more for an auto policy than someone with a single mid-range sedan and a perfect driving record. However, different insurers may charge different premiums for similar policies. So finding the price that is right for you requires some legwork.</p>

          <h2 id='5'>Policy Limit</h2>
          <p>The policy limit is the maximum amount an insurer will pay under a policy for a covered loss. Maximums may be set per period (e.g., annual or policy term), per loss or injury, or over the life of the policy, also known as the lifetime maximum.</p>
          <p>Typically, higher limits carry higher premiums. For a general life insurance policy, the maximum amount the insurer will pay is referred to as the face value, which is the amount paid to a beneficiary upon the death of the insured.</p>

          <h2 id='6'>Deductible</h2>
          <p>The deductible is a specific amount the policy-holder must pay out-of-pocket before the insurer pays a claim. Deductibles serve as deterrents to large volumes of small and insignificant claims.</p>
          <p>Deductibles can apply per-policy or per-claim depending on the insurer and the type of policy. Policies with very high deductibles are typically less expensive because the high out-of-pocket expense generally results in fewer small claims.</p>

          <h2 id='7'>Special Considerations</h2>
          <p>With regard to health insurance, people who have chronic health issues or need regular medical attention should look for policies with lower deductibles.</p>
          <p>Though the annual premium is higher than a comparable policy with a higher deductible, less expensive access to medical care throughout the year may be worth the trade-off.</p>
        </div>
      </div>
      <a href="#" className="top">Back to Top &#8593;</a>
    </>
  )
}
