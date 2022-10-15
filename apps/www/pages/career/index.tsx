import DefaultLayout from '~/components/Layouts/Default'
import Image from 'next/image'
import { Button, IconCheck } from '@supabase/ui'
import SectionContainer from '~/components/Layouts/SectionContainer'
import ReactMarkdown from 'react-markdown'
import career from '../../data/career.json'

const CareerPage = () => {
  return (
    <DefaultLayout>
      <div className="text-scale-1200">
        <div className="container relative mx-auto px-6 py-10 lg:px-16 xl:px-20 text-center space-y-4">
          <span className="text-sm text-brand-900">Careers</span>
          <h1 className="text-4xl text-[450]">Help build software developers love</h1>
          <p className="text-scale-1000">
            Explore remote opportunities and join our mission to help devs <br /> streamline the
            creation of modern apps
          </p>
          <Button>Open positions</Button>
        </div>

        <SectionContainer>
          <div className="flex items-start justify-between">
            {career.company.map((company: { number: string; text: string }, i: number) => {
              return (
                <div key={i} className="border-t-2 border-brand-900 min-w-[185px]">
                  <h1 className="text-4xl text-[450] pt-3">{company.number}</h1>
                  <ReactMarkdown>{company.text}</ReactMarkdown>
                </div>
              )
            })}
          </div>
        </SectionContainer>

        <div className="border-y-2 border-scale-400 bg-scale-100">
          <div className="flex items-center gap-40 sm:pb-18 pb-16 md:pb-24 lg:pb-24">
            <div className="w-[550px] h-[550px]">
              <img src="/images/career/globe.png" width="100%" height="100%" />
            </div>
            <div className="w-[425px]">
              <h1 className="text-2xl text-[450]">We work together, wherever we are</h1>
              <p className="text-scale-1100 mt-4 text-sm">
                We're 100% remote, globally distributed team. Working with a globally distributed
                team can be challenging and rewarding. We have employees all over the world,
                spanning 20 countries so we use tools like Notion, Slack, and Discord to stay
                connected to our team, and our community.
              </p>
              <div>
                <div className="border-t-2 border-brand-900 mt-20"></div>
                <h1 className="text-2xl text-[450] pt-2">
                  We deeply believe in the efficacy of collaborative open source
                </h1>
              </div>
            </div>
          </div>

          <SectionContainer>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h1 className="text-2xl text-[450]">What is Supabase</h1>
                <p className="text-scale-1100">
                  Supabase is an open source Firebase alternative, built by developers for
                  developers. Supabase adds auth, realtime, storage, restful APIs and edge functions
                  to Postgres without a single line of code. Supabase was born-remote. Having a
                  globally distributed, open source company is our secret weapon to hiring top-tier
                  talent.
                </p>
              </div>
              <div className="bg-brand-900 p-36">
                <Image src={'/images/career/globe.png'} width="100" height="100" />
              </div>
            </div>
          </SectionContainer>

          <SectionContainer>
            <h1 className="text-3xl text-[450]">Human powered</h1>
            <p>
              As a completely remote and asynchronous team, we focus on these four traits to keep
              our team effective:
            </p>
            <div className="flex items-center justify-between pt-10">
              <div>
                <div className="p-4 bg-brand-800 w-6 h-6 rounded-md"></div>
                <h2 className="text-lg pt-4">Egoless</h2>
                <p className="text-scale-1100 text-xs">
                  Willing to do the schlep, the team goals come first.
                </p>
              </div>
            </div>
          </SectionContainer>
        </div>

        <SectionContainer>
          <div className="flex items-start justify-between">
            <div className="max-w-sm">
              <h1 className="text-2xl text-[450] w-40">Great people deserve great benefits</h1>
              <p className="text-scale-1100 text-sm pt-2">
                We offer competitive and comprehensive benefits, though lots of companies can offer
                you those. We also have a rarer opportunity: The impact you can make from being at a
                nimble startup, working on a platform that operates at a significant (and quickly
                growing) scale.
              </p>
            </div>
            <div className="">
              {career.benefits.map(
                (benefits: { icon: string; title: string; text: string }, i: number) => {
                  return (
                    <div
                      className="h-fit bg-scale-300 border-scale-400 border-[1px] p-8 rounded-lg flex max-w-md"
                      key={i}
                    >
                      <div>{benefits.icon}</div>
                      <div className="h-fit">
                        <h2>{benefits.title}</h2>
                        <ReactMarkdown className="prose text-sm">{benefits.text}</ReactMarkdown>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </SectionContainer>

        <SectionContainer>
          <div className="w-1/2">
            <h1 className="text-3xl text-[450]">Open positions</h1>
            <p className="text-sm text-scale-1100 pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="mt-10 space-y-6">
            {career.positions.map(
              (
                position: {
                  title: string
                  location: string
                  employment: string
                  description: string
                },
                i: number
              ) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-around bg-scale-400 py-4 rounded-md"
                  >
                    <h2 className="text-2xl font-medium">{position.title}</h2>
                    <div className="bg-brand-700 text-brand-900 border-brand-900 border-[1px] text-xs px-2.5 py-1 rounded-md flex items-center">
                      <div>
                        <img src="/images/career/icon/globe.svg" />
                      </div>
                      <span className="ml-1">{position.location}</span>
                    </div>
                    <span className="text-sm text-scale-1100">{position.employment}</span>
                    <p className="text-sm text-scale-1100">{position.description}</p>
                    <Button>Apply for position</Button>
                  </div>
                )
              }
            )}
          </div>
        </SectionContainer>

        <SectionContainer>
          <div className="text-center w-1/2 mx-auto">
            <h1 className="text-2xl">How we hire</h1>
            <p className="text-sm text-scale-1100 pt-3">
              The entire process is fully remote and all communication happen over email or via
              video chat in Google. Meet. The calls are all 1:1 and usually take between 20-45
              minutes. We know you are interviewing us too, SO please ask questions. We are happy to
              answer.
            </p>
          </div>
          <div className="mt-20 flex items-start">
            {career.hiring.map((hiring: { title: string; text: string }, i: number) => {
              return (
                <div key={i + 1}>
                  <div className="flex items-center">
                    <h3 className="bg-brand-700 border-2 border-brand-900 text-brand-900 text-xl w-fit px-3.5 py-1 rounded-md">
                      {i + 1}
                    </h3>
                    <div className="h-[1px] w-full bg-brand-900"></div>
                  </div>
                  <div className="mt-6 w-3/4">
                    <h2 className="text-lg">{hiring.title}</h2>
                    <p className="text-scale-1100 text-sm mt-1">{hiring.text}</p>
                  </div>
                </div>
              )
            })}
            <h3 className="bg-brand-700 border-2 border-brand-900 text-brand-900 text-xl w-fit min-h-[40px] px-2 py-1 rounded-md flex items-center">
              <IconCheck />
            </h3>
          </div>
        </SectionContainer>
      </div>
    </DefaultLayout>
  )
}

export default CareerPage
