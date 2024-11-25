import React from 'react'
//https://www.npmjs.com/package/react-accessible-accordion
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import { Link } from 'theme-ui'

const Faq = () => {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Why come to hillsHacks?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Can you spend a day without using some form of technology developed
            in the last 5 years? It would probably be difficult - technology has
            completely changed the way we live our lives. Regardless of your
            experience, you will learn something new at hillsHacks about how
            computer science is being used all around us - often in things we
            take for granted! All students grade 7 and up are welcome.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Where will the event take place?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            hillsHacks will be a fully in-person event at{' '}
            <Link href="https://goo.gl/maps/se4i7cSCAxGcRvYHA" target="_blank">
              Watchung Hills Regional High School
            </Link>
            !
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>When will hillsHacks be?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>The event will take place on March 16th, 2025. The event will be from 11:00 AM to 4:00 PM</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>How much does this cost?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Entry will be $25.
          Make checks Payable to WHRHS. Include participant name in the memo.
          Mail to Mary Ellen Phelan at Watchung Hills Regional High School 
          108 Stirling Road Warren, NJ 07059
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Will there be swag?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes! Every attendee will receive a hillsHacks T-shirt. Winners of the design challenge will also receive prizes!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What if I don’t know anything about coding or computer science?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            No problem! We highly encourage beginners to come, and our workshops
            will give you opportunities to learn about fundamental CS concepts.
            After creating an idea as part of our design challenge, you'll be
            ready to implement it on your own after the event!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            I’m an expert at coding. What do I get out of this event?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Take a look at some of our advanced workshops! Also, we recommend
            you to actively engage in our Panel Q&A session (this applies to
            beginners too!)
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Can I work as a team?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Absolutely! As part of the hackathon's design challenge you can work
            solo or in teams of up to four individuals.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            When will registrations open?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Registrations are now open! To register go fill out <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfhXSaahYkV5PiHG3qwJ2JLud9DsSxyi0k-UgZGuLQt_bHhAw/viewform?usp=sf_link
">this form</Link>
          </p>
        </AccordionItemPanel>
      </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Will there be food?</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Yes, lunch is covered by the $25 entry fee! 
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>I have another question...</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Please feel free to email us at{' '}
            <Link href="mailto:team@hillshacks.com">team@hillshacks.com</Link>{' '}
            with any questions you may have!
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}
export default Faq
