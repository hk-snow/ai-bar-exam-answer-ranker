
import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "A homeowner, Alice, hires a contractor, Bob, to build a deck. The contract specifies the use of 'Brand X' cedar wood. Bob, unable to source Brand X at a reasonable price, uses 'Brand Y' cedar wood, which is of comparable quality and appearance. Upon completion, Alice discovers the substitution and refuses to pay the final installment of the contract price. Discuss Alice's rights and Bob's potential remedies.",
    goodAnswer: "The core issue is whether Bob's substitution of materials constitutes a material breach of the contract. Under contract law, a breach is material if it defeats the purpose of the contract. Here, the wood is of comparable quality. Courts would likely find this to be substantial performance, not a material breach. Alice is not entitled to withhold the entire payment. However, she is entitled to damages, calculated as the difference in value between the specified Brand X wood and the Brand Y wood used. If there's no difference in value, her damages would be nominal. Bob can sue for the unpaid contract price, less any damages awarded to Alice for the non-conforming substitution.",
    aiAnswer: "Alice can sue Bob for breach of contract because he did not use Brand X wood as specified. The contract was very clear. Bob should have told Alice he could not find the wood. Since he used different wood, Alice does not have to pay him. This is a clear violation of the terms. Bob will likely lose in court and may have to remove the deck at his own expense. He breached the specific terms of the agreement.",
  },
  {
    id: 2,
    question: "Dan is driving his car 15 mph over the speed limit on a city street. A child, unseen by Dan, darts into the road chasing a ball. Dan is unable to stop in time and strikes the child, causing serious injury. The child's parents sue Dan for negligence. What must the parents prove, and what is Dan's likely defense?",
    goodAnswer: "The parents must prove the four elements of negligence: duty, breach, causation, and damages. (1) Duty: Dan owed a duty of reasonable care to other users of the road, including pedestrians. (2) Breach: Dan breached this duty by speeding (negligence per se, as violating a safety statute creates a presumption of breach). (3) Causation: They must prove Dan's breach was both the actual cause (but-for his speeding, he might have been able to stop) and the proximate cause (the injury was a foreseeable result of speeding). (4) Damages: The child's serious injuries satisfy this element. Dan's likely defense is comparative or contributory negligence. He will argue the child was also negligent by darting into the road without looking. The success of this defense and the reduction of damages, if any, will depend on the jurisdiction and the child's age (as very young children may be incapable of negligence).",
    aiAnswer: "Dan is negligent because he was speeding. Speeding is against the law. He had a duty to drive safely, and he breached it. This caused the child's injuries. The parents will win the lawsuit. Dan's defense might be that the child was also at fault, but this is unlikely to work because children are not held to the same standard as adults.",
  },
  {
    id: 3,
    question: "A will devises a testator's entire estate 'to my children, A, B, and C, in equal shares.' Child C predeceases the testator, leaving a daughter, G. The jurisdiction has an anti-lapse statute that applies to descendants of the testator. How should the testator's estate be distributed?",
    goodAnswer: "The issue is how C's share is distributed given that C predeceased the testator. Normally, under common law, a gift to a beneficiary who predeceases the testator would lapse and fall into the residuary estate. However, the jurisdiction has an anti-lapse statute. These statutes prevent lapse by substituting the descendants of the predeceased beneficiary. Since C is a child of the testator and left a descendant (G), the statute applies. Therefore, C's one-third share of the estate does not lapse. It passes to C's daughter, G. The final distribution of the estate will be: one-third to A, one-third to B, and one-third to G.",
    aiAnswer: "The estate is divided between A, B, and C. Since C died, his share is gone. The estate will now be split between A and B only. Each will get half. This is because the will specified the gift was to A, B, and C, and C is no longer there to receive it. The gift to C has lapsed.",
  },
];
