import React from "react";

export class StudentIcon extends React.Component {
    render() {
        return (
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-primary-500" d="M55 39.4414V22.907C55 20.9126 53.3774 19.2901 51.3831 19.2901H28.7286V18.8652C28.7286 18.3074 28.5312 17.7952 28.2033 17.3935C28.4466 17.0958 28.6163 16.7391 28.6889 16.3526C29.6107 15.8092 30.1983 14.8138 30.1983 13.7211C30.1983 13.205 30.0654 12.7007 29.8164 12.2514C30.0653 11.802 30.1983 11.2978 30.1983 10.7816C30.1983 9.69343 29.6154 8.70687 28.7114 8.1631C28.7229 8.05653 28.7286 7.94954 28.7286 7.84212C28.7286 6.29428 27.5755 5.01059 26.0832 4.80509C25.5384 3.88953 24.5465 3.30666 23.4581 3.30666C23.3184 3.30666 23.1772 3.3174 23.0359 3.33889C22.428 2.84668 21.6686 2.57179 20.8861 2.57179C20.7816 2.57179 20.6769 2.57705 20.5708 2.58758C19.9172 2.10085 19.1305 1.83691 18.3142 1.83691C17.4979 1.83691 16.7113 2.10085 16.0576 2.58758C15.9514 2.57705 15.8467 2.57179 15.7422 2.57179C14.9577 2.57179 14.2105 2.83572 13.6037 3.3217C12.6357 3.41827 11.7742 3.97482 11.2802 4.8052C9.78785 5.01059 8.63479 6.29428 8.63479 7.84212C8.63479 7.94943 8.64048 8.05653 8.65197 8.1631C7.74813 8.70687 7.16504 9.69343 7.16504 10.7816C7.16504 11.2978 7.29792 11.802 7.54692 12.2514C7.29792 12.7007 7.16504 13.205 7.16504 13.7211C7.16504 14.8138 7.75253 15.8092 8.67453 16.3526C8.71503 16.5683 8.78668 16.7744 8.88357 16.9664C8.28932 17.3893 7.89991 18.0819 7.89991 18.8651V20.3349C7.89991 21.62 8.94545 22.6658 10.2309 22.6658H10.6136L10.6762 23.057C10.8214 23.9643 11.29 24.788 11.996 25.3764L12.3093 25.6374V28.0678C12.3093 28.3366 12.1365 28.5705 11.8796 28.6494L5.43855 30.6312C3.83389 31.1251 2.75569 32.5848 2.75569 34.2638V44.9529C2.75569 46.015 3.12372 46.9923 3.73753 47.7661H1.77977C0.79836 47.7661 0 48.5645 0 49.5459V51.383C0 52.3644 0.79836 53.1628 1.77977 53.1628H53.2202C54.2016 53.1628 55 52.3644 55 51.383V49.5459C55 48.5645 54.2016 47.7661 53.2202 47.7661H43.8698L43.242 43.0583H51.3831C53.3774 43.0583 55 41.4358 55 39.4414ZM10.2306 20.9435C9.89517 20.9435 9.6221 20.6705 9.6221 20.335V18.8652C9.6221 18.6429 9.74327 18.45 9.92181 18.3438L10.3379 20.9435H10.2306ZM10.3577 15.9513C10.3612 15.9252 10.3644 15.8992 10.3667 15.8728C10.4025 15.4792 10.1657 15.1117 9.79247 14.9816C9.25106 14.793 8.88733 14.2865 8.88733 13.7212C8.88733 13.3047 9.07812 13.0056 9.23807 12.8279C9.53305 12.5003 9.53305 12.0027 9.23796 11.675C9.0779 11.4974 8.88723 11.1982 8.88723 10.7817C8.88723 10.1817 9.29629 9.65186 9.88217 9.4933C10.1196 9.42896 10.3183 9.26632 10.4279 9.0461C10.5377 8.826 10.548 8.56937 10.4563 8.34109C10.3903 8.17706 10.3569 8.00916 10.3569 7.84233C10.3569 7.11208 10.9425 6.516 11.6689 6.49924C11.7055 6.50418 11.7424 6.50826 11.7799 6.51052C12.1655 6.53265 12.5177 6.29814 12.6444 5.9342C12.8299 5.4016 13.323 5.04109 13.8771 5.02938C13.8937 5.03057 13.9105 5.03132 13.9274 5.03153C14.1601 5.03433 14.3808 4.94688 14.5456 4.78521C14.8685 4.46854 15.2934 4.29408 15.742 4.29408C15.8582 4.29408 15.9813 4.30912 16.1183 4.33995C16.3967 4.40258 16.6885 4.32319 16.8968 4.12769C17.2873 3.76127 17.7906 3.55942 18.3141 3.55942C18.8377 3.55942 19.341 3.76127 19.7314 4.12779C19.9395 4.3233 20.2313 4.40279 20.5098 4.34006C20.6469 4.30912 20.77 4.29419 20.8861 4.29419C21.3671 4.29419 21.8149 4.49593 22.1472 4.86213C22.3773 5.11575 22.7357 5.20889 23.0601 5.09953C23.2009 5.05216 23.3312 5.02906 23.4583 5.02906C24.0235 5.02906 24.5301 5.39279 24.7187 5.93409C24.8455 6.29793 25.1979 6.5334 25.5833 6.51041C25.6184 6.50837 25.653 6.5045 25.694 6.49913C26.4204 6.51578 27.0062 7.11197 27.0062 7.84223C27.0062 8.00905 26.9728 8.17695 26.9068 8.34088C26.8151 8.56915 26.8254 8.82578 26.9352 9.046C27.045 9.26621 27.2436 9.42896 27.4811 9.49319C28.0668 9.65175 28.4759 10.1816 28.4759 10.7816C28.4759 11.1981 28.2851 11.4973 28.1252 11.6749C27.8301 12.0025 27.8301 12.5001 28.1252 12.8278C28.2853 13.0055 28.4759 13.3046 28.4759 13.7211C28.4759 14.2864 28.1122 14.793 27.5708 14.9815C27.1976 15.1116 26.9607 15.4791 26.9965 15.8727C26.9989 15.8991 27.0021 15.9253 27.0058 15.9514C26.9944 16.2129 26.8113 16.4396 26.5528 16.5084C26.5251 16.5157 25.7015 16.5343 25.7015 16.5343L25.2063 13.563C25.1331 13.1235 24.7358 12.8125 24.2926 12.8458C24.2526 12.8488 24.2135 12.8537 24.1742 12.859L24.1692 12.8597C23.7279 12.8518 23.3197 12.6277 23.0736 12.2564C22.9139 12.0159 22.6446 11.8712 22.3559 11.8712C22.0672 11.8712 21.7977 12.0159 21.6382 12.2563C21.3876 12.6342 20.9692 12.8598 20.5187 12.8598C20.0682 12.8598 19.6498 12.6342 19.3991 12.2563C19.2395 12.0158 18.9702 11.8711 18.6814 11.8711C18.3928 11.8711 18.1233 12.0158 17.9637 12.2562C17.7131 12.6341 17.2947 12.8597 16.8442 12.8597C16.3938 12.8597 15.9754 12.6341 15.7246 12.2562C15.565 12.0157 15.2957 11.871 15.0069 11.871C14.7183 11.871 14.4488 12.0157 14.2893 12.2561C14.043 12.6273 13.6348 12.8515 13.1937 12.8594L13.1886 12.8587C13.1495 12.8533 13.1101 12.8485 13.0701 12.8455C12.627 12.8117 12.2298 13.1233 12.1565 13.5627L11.6614 16.5343C11.6614 16.5343 10.8379 16.5158 10.8103 16.5085C10.5519 16.4397 10.3688 16.2128 10.3577 15.9513ZM27.0063 18.8652V19.2901H26.5551L26.7066 18.3438C26.8851 18.45 27.0063 18.6429 27.0063 18.8652ZM11.6521 18.2567H11.7686C12.5519 18.2567 13.214 17.6957 13.343 16.923L13.7419 14.5287C14.203 14.4415 14.635 14.2495 15.0073 13.9701C15.5301 14.3627 16.1713 14.5823 16.8444 14.5823C17.5174 14.5823 18.1587 14.3626 18.6815 13.9701C19.2043 14.3627 19.8455 14.5823 20.5187 14.5823C21.1916 14.5823 21.833 14.3626 22.3558 13.9701C22.7279 14.2496 23.16 14.4414 23.6211 14.5287L24.0201 16.9231C24.1141 17.4871 24.4928 17.937 24.9948 18.1396L24.8108 19.2901H23.8255C21.8311 19.2901 20.2086 20.9127 20.2086 22.907V26.729C20.0536 26.7895 19.888 26.8224 19.7205 26.8224H16.9077C16.594 26.8224 16.2886 26.7118 16.0476 26.511L13.0982 24.053C12.7121 23.7313 12.4559 23.281 12.3765 22.7848L11.6521 18.2567ZM12.386 30.2957C13.3703 29.9928 14.0314 29.0975 14.0314 28.0678V27.0727L14.9452 27.8342C15.4951 28.2925 16.192 28.5448 16.9079 28.5448H19.7207C19.8845 28.5448 20.0478 28.5308 20.2088 28.5046V34.0459C19.7035 34.1284 19.1898 34.1711 18.6742 34.1711C15.8014 34.1711 13.0923 32.8567 11.3085 30.6273L12.386 30.2957ZM4.4781 34.2637C4.4781 33.3456 5.06773 32.5473 5.94516 32.2773L9.55958 31.1652C11.6495 34.1267 15.0517 35.8933 18.6742 35.8933C19.1887 35.8933 19.7016 35.8571 20.2088 35.7872V39.4414C20.2088 41.4358 21.8313 43.0583 23.8257 43.0583H27.5575V47.7086C27.5575 47.7281 27.5591 47.747 27.5604 47.766H22.8497V46.79C22.8497 44.7956 21.2271 43.1731 19.2328 43.1731H10.047C10.0153 43.1731 9.98959 43.1474 9.98959 43.1157V37.6042C9.98959 37.1287 9.60405 36.743 9.12839 36.743C8.65272 36.743 8.26719 37.1285 8.26719 37.6042V43.1157C8.26719 44.0971 9.06555 44.8955 10.047 44.8955H15.6158V47.766H7.29126C5.74009 47.766 4.4781 46.504 4.4781 44.9528V34.2637ZM21.1273 46.7901V47.7661H17.3382V44.8956H19.2328C20.2774 44.8955 21.1273 45.7454 21.1273 46.7901ZM53.2202 49.4884C53.2519 49.4884 53.2776 49.5141 53.2776 49.5458V51.3829C53.2776 51.4146 53.2519 51.4403 53.2202 51.4403H1.77977C1.74808 51.4403 1.7224 51.4146 1.7224 51.3829V49.5458C1.7224 49.5141 1.74808 49.4884 1.77977 49.4884H53.2202ZM29.2769 47.7661C29.2782 47.7471 29.2798 47.7281 29.2798 47.7087V43.0584H31.9666L31.3388 47.7662L29.2769 47.7661ZM33.0765 47.7661L34.571 36.5567C34.6355 36.0738 35.0513 35.7097 35.5386 35.7097H39.6703C40.1574 35.7097 40.5733 36.0738 40.6377 36.5567L42.1324 47.7661H33.0765ZM43.1159 41.336C43.0811 41.336 43.0472 41.3387 43.0133 41.3427L42.3448 36.3291C42.1668 34.9942 41.017 33.9874 39.6703 33.9874H35.5386C34.1918 33.9874 33.0419 34.9942 32.8639 36.3291L32.1954 41.3427C32.1618 41.3387 32.1276 41.336 32.0928 41.336H23.8256C22.781 41.336 21.931 40.4861 21.931 39.4414V22.907C21.931 21.8623 22.781 21.0124 23.8256 21.0124H51.3831C52.4278 21.0124 53.2777 21.8623 53.2777 22.907V39.4414C53.2777 40.4861 52.4278 41.336 51.3831 41.336H43.1159Z"/>
            <path className="fill-primary-500" d="M37.6043 26.6389C36.1164 26.6389 34.906 27.8493 34.906 29.3372C34.906 30.8251 36.1164 32.0356 37.6043 32.0356C39.0922 32.0356 40.3027 30.8251 40.3027 29.3372C40.3027 27.8495 39.0921 26.6389 37.6043 26.6389ZM37.6043 30.3133C37.0662 30.3133 36.6283 29.8754 36.6283 29.3372C36.6283 28.7991 37.0662 28.3612 37.6043 28.3612C38.1425 28.3612 38.5804 28.7991 38.5804 29.3372C38.5803 29.8754 38.1425 30.3133 37.6043 30.3133Z"/>
          </svg>       
        )
    }
}