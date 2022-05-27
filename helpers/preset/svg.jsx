import * as React from 'react'

const Facebook = ({ fill = '#000', ...props }) => (
  <svg
    width={9}
    height={16}
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.468 11.938V8.293c0-.343-.01-.353-.353-.353-.334 0-.668-.01-1.002 0-.162.005-.224-.063-.224-.23.005-.758.01-1.516 0-2.275-.005-.21.086-.27.267-.27.31.006.62 0 .93 0 .368-.004.377-.019.382-.4.005-.676-.02-1.351.048-2.026C2.668 1.124 3.517.243 5.1.067 6.01-.036 6.927.013 7.838.003c.148 0 .22.059.22.216-.005.797-.005 1.6 0 2.397 0 .201-.11.225-.263.225-.42 0-.844 0-1.263.005-.134 0-.272.005-.406.025-.215.034-.381.147-.415.377-.08.592-.043 1.189-.048 1.78 0 .162.13.138.23.143l1.716.03c.034 0 .062.004.096.004.243-.01.334.103.32.357-.044.71-.11 1.414-.187 2.114-.019.176-.095.23-.257.23-.534.005-1.064.025-1.598.044-.305.01-.32.02-.32.338 0 1.825 0 3.65-.004 5.48 0 .622 0 1.239-.005 1.86-.005.318-.038.357-.343.362-.85.01-1.698 0-2.552.01-.253 0-.296-.137-.296-.357.01-1.243.005-2.471.005-3.705Z"
      fill={fill}
    />
  </svg>
)
const Instagram = ({ fill = '#000', ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.642 0h8.234c.057.024.114.065.178.081 2.06.446 3.448 2.15 3.448 4.259 0 2.296.008 4.591 0 6.895a4.284 4.284 0 0 1-4.259 4.259c-2.328.008-4.648.008-6.976 0a4.27 4.27 0 0 1-4.024-2.872c-.089-.251-.162-.503-.243-.754V3.634c.024-.057.065-.113.081-.178C.487 1.72 1.558.616 3.261.114c.13-.033.284.008.381-.114Zm4.121 3.456a4.264 4.264 0 0 0-4.291 4.25c-.008 2.401 1.882 4.316 4.259 4.324a4.264 4.264 0 0 0 4.315-4.275 4.272 4.272 0 0 0-4.283-4.3Zm5.168-1.72a.842.842 0 0 0-.86.82.837.837 0 0 0 .81.867.836.836 0 0 0 .877-.843.83.83 0 0 0-.827-.844Z"
      fill={fill}
    />
    <path
      d="M7.739 5.167c1.452 0 2.596 1.128 2.596 2.564 0 1.452-1.128 2.596-2.564 2.596-1.452 0-2.595-1.128-2.595-2.564 0-1.452 1.127-2.596 2.563-2.596Z"
      fill={fill}
    />
  </svg>
)

const Linkedin = ({ fill = '#000', ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.614 0h5.983C14.684 0 15.5.816 15.5 1.904v11.693c0 1.087-.816 1.903-1.903 1.903H1.632C.816 15.5 0 14.684 0 13.597V1.632C0 .816.816 0 1.904 0h5.71Zm1.088 6.526v-.544c0-.271 0-.271-.272-.271H7.07c-.272 0-.272 0-.272.271v5.983c0 .272 0 .272.272.272h1.36c.272 0 .272 0 .272-.272V8.43c0-.544.544-1.088 1.087-1.088.544 0 1.088.544 1.088 1.088V11.964c0 .273 0 .273.272.273h1.36c.272 0 .272 0 .272-.272V7.614c0-1.36-.816-2.175-1.904-2.175-.816 0-1.631.272-2.175 1.087ZM5.439 8.974V5.982c0-.271 0-.271-.272-.271h-1.36c-.272 0-.272 0-.272.271v5.983c0 .272 0 .272.272.272h1.36c.272 0 .272 0 .272-.272V8.974ZM4.35 4.894c.544 0 1.088-.543 1.088-1.087 0-.544-.544-1.088-1.088-1.088s-1.088.544-1.088 1.088.272 1.088 1.088 1.088Z"
      fill={fill}
    />
  </svg>
)

const Youtube = ({ fill = '#000', ...props }) => (
  <svg
    width={19}
    height={14}
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.9 13.185H7.672c-.043-.006-.083-.017-.127-.02a80.67 80.67 0 0 1-2.363-.07c-.935-.043-1.871-.092-2.799-.23-.704-.107-1.273-.43-1.684-1.02-.265-.381-.363-.82-.436-1.268C.077 9.433.032 8.275.005 7.119c-.02-.962.02-1.92.09-2.88.046-.635.104-1.273.26-1.894.245-.98.858-1.6 1.851-1.814.705-.154 1.43-.18 2.146-.223A77.92 77.92 0 0 1 7.84.195a96.825 96.825 0 0 1 5.419.073c.979.04 1.958.083 2.926.237.941.147 1.606.65 1.944 1.548.139.37.182.762.242 1.152.032.214.03.43.087.639v5.62c-.023.044-.026.09-.032.14-.04.462-.098.924-.202 1.377-.234 1.017-.858 1.65-1.883 1.86-.708.145-1.427.177-2.146.217a70.245 70.245 0 0 1-3.022.101c-.09.006-.182-.006-.271.026Zm1.373-6.499-4.83-2.782v5.564l4.83-2.782Z"
      fill={fill}
    />
  </svg>
)

const Quote = ({ fill = '#000', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 152.59 147.04"
    {...props}
  >
    <defs>
      <style>
        {'.cls-1{fill:none;stroke-miterlimit:10;stroke-width:5.67px}'}
      </style>
    </defs>
    <g id="Layer_2" data-name="Layer 2">
      <g id="Layer_2-2" data-name="Layer 2">
        <path
          className="cls-1"
          stroke={fill}
          d="M139 2.74c-62.11 16.44-58.23 83-58.23 83l-.2 58.5h69.18V82.36H109s-2.69-47.51 40.33-59.61M66 82.36H31.24s-2.69-47.51 40.33-59.61"
        />
        <path
          className="cls-1"
          stroke={fill}
          d="M61.27 2.74C-.84 19.18 3 85.71 3 85.71l-.2 58.5H66"
        />
      </g>
    </g>
  </svg>
)

const Mail = ({ fill = '#000', ...props }) => (
  <svg
    width={21}
    height={13}
    viewBox="0 0 21 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m4.086 2.476.743.62c.495.37.99.742 1.485 1.114 1.115.742 2.229 1.609 3.343 2.476.248.247.495.247.867 0 2.6-1.857 5.076-3.838 7.552-5.572.248-.124.372-.247.62-.495.247-.124.494-.371.742-.619H.62a60.059 60.059 0 0 0 3.467 2.476Z"
      fill={fill}
    />
    <path
      d="M18.448 2.6c-1.61 1.238-3.22 2.352-4.953 3.59-.371.248-.743.496-1.114.867-.372.248-.867.62-1.362.99h-.124c-.124.248-.495.496-.866.496-.248 0-.496-.124-.743-.248-2.724-1.98-5.324-3.962-7.924-5.819L0 1.486v10.523c0 .743.248.99.99.99h18.2c.743 0 .991-.123.991-.866V1.486L18.448 2.6Z"
      fill={fill}
    />
  </svg>
)

const Twitter = ({ fill = '#000', ...props }) => (
  <svg
    width={19}
    height={15}
    viewBox="0 0 19 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.264.707c2.041 2.406 4.615 3.724 7.762 3.948-.021-.206-.047-.39-.065-.578A3.742 3.742 0 0 1 11.547.198c1.396-.437 2.657-.148 3.748.834.133.12.237.16.42.112a7.654 7.654 0 0 0 1.981-.772c.043-.026.094-.044.17-.084-.292.882-.822 1.535-1.56 2.034.008.014.011.032.018.047.339-.073.68-.134 1.012-.224.331-.09.655-.217 1.03-.343-.151.206-.267.4-.418.556-.428.433-.871.856-1.318 1.271-.086.083-.13.152-.126.271.05 2.438-.637 4.655-2.027 6.645-1.505 2.156-3.543 3.554-6.102 4.16a10.996 10.996 0 0 1-3.78.225 10.59 10.59 0 0 1-4.451-1.528A16.056 16.056 0 0 1 0 13.305c2.07.184 3.896-.311 5.541-1.557-1.728-.152-2.877-1.019-3.514-2.647.58.094 1.113.086 1.656-.062C1.516 8.49.666 6.58.734 5.287c.515.256 1.045.43 1.642.451C.403 4.305.508 1.918 1.264.708Z"
      fill={fill}
    />
  </svg>
)

const Whatsapp = ({ ...props }) => (
  <svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.212402 20.9895C0.340607 20.514 0.459316 20.0813 0.578024 19.6486C0.896163 18.5074 1.2143 17.3614 1.53719 16.2202C1.57992 16.0633 1.56568 15.9396 1.48496 15.797C-0.590067 12.0119 -0.0677497 7.42322 2.84773 4.23254C4.69958 2.20686 7.02152 1.10843 9.77081 0.994304C14.5904 0.799345 18.7689 3.89492 19.9133 8.55493C21.3235 14.2944 17.5961 19.6771 12.1782 20.7423C9.84203 21.1988 7.61981 20.8659 5.5068 19.7627C5.41183 19.7152 5.27413 19.6962 5.17442 19.7247C3.58847 20.1241 2.00727 20.5378 0.421329 20.9468C0.369098 20.9563 0.316866 20.9658 0.212402 20.9895ZM2.59607 18.6643C3.58847 18.4075 4.52864 18.1603 5.46881 17.932C5.58752 17.9035 5.75371 17.9273 5.85818 17.9891C9.19151 20.0195 13.3511 19.525 16.1098 16.7623C19.3055 13.5621 19.3055 8.26963 16.0766 5.11223C14.0301 3.11508 11.5562 2.32574 8.74517 2.82502C3.12313 3.8236 0.212402 10.0766 3.04716 15.0361C3.33681 15.5402 3.39379 15.9491 3.21335 16.4769C2.97119 17.1807 2.805 17.9035 2.59607 18.6643Z"
      fill="black"
    />
    <path
      d="M12.8195 15.7209C11.9268 15.7018 11.1196 15.3975 10.3408 14.9886C8.64568 14.0994 7.21168 12.9011 6.13855 11.3081C5.54501 10.4284 5.14615 9.46788 5.18414 8.37896C5.21263 7.58961 5.60199 6.97145 6.20028 6.49594C6.58015 6.19161 7.04549 6.21538 7.48708 6.38657C7.5868 6.42461 7.68176 6.54824 7.72925 6.65761C8.02364 7.31382 8.3038 7.97478 8.58395 8.64049C8.66467 8.8307 8.63618 9.00664 8.48898 9.16831C8.26106 9.42033 8.04739 9.68662 7.81947 9.93864C7.66277 10.1098 7.64853 10.2762 7.77198 10.476C8.53646 11.7028 9.53362 12.6633 10.8584 13.2625C10.9724 13.3148 11.0958 13.3528 11.2145 13.3861C11.4519 13.4622 11.6419 13.4099 11.7938 13.1959C12.0075 12.9011 12.2402 12.6205 12.4633 12.3352C12.639 12.1117 12.7672 12.0784 13.0189 12.1926C13.6789 12.4969 14.3389 12.8012 14.999 13.1055C15.2031 13.2006 15.2981 13.3528 15.2601 13.5811C15.1272 14.4275 14.7615 15.1217 13.9353 15.4688C13.5839 15.6162 13.2041 15.6876 12.8385 15.7922C12.8337 15.7636 12.829 15.7399 12.8195 15.7209Z"
      fill="black"
    />
  </svg>
)

const Close = ({ color = 'currentColor', ...options }) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...options}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.366305 21.5793C-0.12185 22.0675 -0.12185 22.8589 0.366305 23.3471C0.854461 23.8352 1.64592 23.8352 2.13407 23.3471L11.8564 13.6247L21.5793 23.3477C22.0675 23.8358 22.8589 23.8358 23.3471 23.3476C23.8352 22.8595 23.8352 22.068 23.3471 21.5799L13.6242 11.857L23.3473 2.13388C23.8354 1.64573 23.8354 0.854272 23.3473 0.366117C22.8591 -0.122038 22.0677 -0.122039 21.5795 0.366116L11.8564 10.0892L2.13388 0.366679C1.64573 -0.121476 0.854272 -0.121476 0.366117 0.366679C-0.122039 0.854835 -0.122039 1.64629 0.366117 2.13445L10.0886 11.857L0.366305 21.5793Z'
      stroke={color}
      fill={color}
    />
  </svg>
);

export {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Quote,
  Mail,
  Twitter,
  Whatsapp,
  Close,
}
