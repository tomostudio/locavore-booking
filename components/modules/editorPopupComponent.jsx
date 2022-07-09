import urlFor from '@/helpers/sanity/urlFor'
import Image from 'next/image'

const { PortableText } = require('@portabletext/react')
const { default: FancyLink } = require('../utils/fancyLink')
const { default: WhatsappModule } = require('./whatsappModule')

const EditorPopupComponent = ({ data }) => {
  return (
    <>
      {console.log(data)}
      <PortableText
        value={data}
        components={{
          block: {
            normal: ({ children }) =>
              children[0] === '' ? <br /> : <p align="center">{children}</p>,
            h1: ({ children }) => <h1 align="center">{children}</h1>,
            h2: ({ children }) => <h2 align="center">{children}</h2>,
            h3: ({ children }) => <h3 align="center">{children}</h3>,
            h4: ({ children }) => <h4 align="center">{children}</h4>,
            h5: ({ children }) => <h5 align="center">{children}</h5>,
          },
          types: {
            image: (props) => (
              <div className="w-full h-25rem max-md:h-56">
                <div
                  className="relative w-full h-full"
                  style={{
                    backgroundColor: `rgba(208,208,208, 1)`,
                  }}
                >
                  {props.value && props.value.asset ? (
                    <Image
                      src={urlFor(props.value).url()}
                      alt={props.value.alt}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      placeholder="blur"
                      blurDataURL={urlFor(props.value)
                        .blur(2)
                        .format('webp')
                        .saturation(-100)
                        .width(100)
                        .url()}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ),
            lineDivider: () => (
              <hr className="w-full lg:w-72 mx-auto linePopup" />
            ),
            dotDivider: () => <span className="block leading-none dot">•</span>,
            button: (props) => (
              <FancyLink
                destination={props.value.url}
                blank={true}
                className="mb-4 py-4 px-6 text-sm uppercase font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto"
              >
                {props.value.title}
              </FancyLink>
            ),
            columnBlock: (props) => (
              <div className="column">
                <div>
                  {props.value.left.editor && (
                    <div className="w-full h-full editor-styling">
                      <PortableText
                        value={props.value.left.editor}
                        components={{
                          block: {
                            normal: ({ children }) =>
                              children[0] === '' ? (
                                <br />
                              ) : (
                                <p align="center">{children}</p>
                              ),
                            h1: ({ children }) => (
                              <h1 align="center">{children}</h1>
                            ),
                            h2: ({ children }) => (
                              <h2 align="center">{children}</h2>
                            ),
                            h3: ({ children }) => (
                              <h3 align="center">{children}</h3>
                            ),
                            h4: ({ children }) => (
                              <h4 align="center">{children}</h4>
                            ),
                            h5: ({ children }) => (
                              <h5 align="center">{children}</h5>
                            ),
                          },
                          types: {
                            lineDivider: () => <hr className="w-full line" />,
                            dotDivider: () => (
                              <span className="block leading-none dot">•</span>
                            ),
                            button: (props) => (
                              <FancyLink
                                destination={props.value.url}
                                blank={true}
                                className="mb-4 py-4 px-6 text-sm uppercase font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto"
                              >
                                {props.value.title}
                              </FancyLink>
                            ),
                          },
                          marks: {
                            link: (props) => (
                              <FancyLink destination={props.value.url}>
                                {props.children}
                              </FancyLink>
                            ),
                            wa_link: (props) => (
                              <WhatsappModule
                                whatsappLink={props.value.url}
                                whatsappText={props.children}
                              />
                            ),
                            email: (props) => (
                              <FancyLink
                                blank={true}
                                href={`mailto:${props.value.content}`}
                                className="italic font-serif font-semibold text-lg"
                              >
                                {props.children}
                              </FancyLink>
                            ),
                            font: (props) => (
                              <span className={`${props.value.type} italic`}>
                                {props.children}
                              </span>
                            ),
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
                <div>
                  {props.value.right.editor && (
                    <div className="w-full h-full editor-styling">
                      <PortableText
                        value={props.value.right.editor}
                        components={{
                          block: {
                            normal: ({ children }) =>
                              children[0] === '' ? (
                                <br />
                              ) : (
                                <p align="center">{children}</p>
                              ),
                            h1: ({ children }) => (
                              <h1 align="center">{children}</h1>
                            ),
                            h2: ({ children }) => (
                              <h2 align="center">{children}</h2>
                            ),
                            h3: ({ children }) => (
                              <h3 align="center">{children}</h3>
                            ),
                            h4: ({ children }) => (
                              <h4 align="center">{children}</h4>
                            ),
                            h5: ({ children }) => (
                              <h5 align="center">{children}</h5>
                            ),
                          },
                          types: {
                            lineDivider: () => <hr className="w-full line" />,
                            dotDivider: () => (
                              <span className="block leading-none dot">•</span>
                            ),
                            button: (props) => (
                              <FancyLink
                                destination={props.value.url}
                                blank={true}
                                className="mb-4 py-4 px-6 text-sm uppercase font-bold tracking-widest transition-all ease-linear hover:bg-black border hover:text-white border-black rounded-xl pointer-events-auto"
                              >
                                {props.value.title}
                              </FancyLink>
                            ),
                          },
                          marks: {
                            link: (props) => (
                              <FancyLink destination={props.value.url}>
                                {props.children}
                              </FancyLink>
                            ),
                            wa_link: (props) => (
                              <WhatsappModule
                                whatsappLink={props.value.url}
                                whatsappText={props.children}
                              />
                            ),
                            email: (props) => (
                              <FancyLink
                                blank={true}
                                href={`mailto:${props.value.content}`}
                                className="italic font-serif font-semibold text-lg"
                              >
                                {props.children}
                              </FancyLink>
                            ),
                            font: (props) => (
                              <span className={`${props.value.type} italic`}>
                                {props.children}
                              </span>
                            ),
                          },
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          marks: {
            link: (props) => (
              <FancyLink
                // className="transition-all hover:opacity-50 font-bold underline decoration-black underline-offset-1 items-center relative"
                destination={props.value.url}
              >
                {props.children}
              </FancyLink>
            ),
            wa_link: (props) => (
              <WhatsappModule
                whatsappLink={props.value.url}
                whatsappText={props.children}
              />
            ),
            mail: (props) => (
              <FancyLink
                blank={true}
                href={`mailto:${props.value.content}`}
                className="italic font-serif font-semibold text-lg"
              >
                {props.children}
              </FancyLink>
            ),
            font: (props) => (
              <span className={`${props.value.type} italic`}>
                {props.children}
              </span>
            ),
          },
        }}
      />
    </>
  )
}

export default EditorPopupComponent