<template>
  <div class="shop-wrapper">
    <swiper
      class="swiper"
      :options="swiperOption"
      :style="{ overflow: 'visible' }"
    >
      <swiper-slide>
        <div class="slide-item first">
          <div :style="{ padding: '16px 20px' }">
            <img src="@/assets/swiperLogo.png" />
            <div :style="{ margin: '32px 0 0 41px' }">
              <p :style="{ fontWeight: '800' }">Stan Smith,</p>
              <p :style="{ fontWeight: '800' }">Forever!</p>
              <button
                class="slider-btn"
                :style="{
                  cursor: 'pointer',
                  transition: 'all .3s',
                  border: 'none',
                  marginTop: '30px',
                  height: '47px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '180px',
                  borderRadius: '110px',
                  background: '#A5D364',
                  color: '#FFFFFF',
                }"
              >
                Купить
              </button>
            </div>
          </div>
          <img
            :style="{ objectFit: 'contain' }"
            src="@/assets/swiperBackground.png"
            alt="img"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item second"></div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item third"></div>
      </swiper-slide>
    </swiper>
    <div ref="sneakers" class="sneakers-wrapper">
      <div class="sneakers-title">
        <h3>Все кроссовки</h3>
        <div class="input-wrapper">
          <svg
            class="search-icon"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
              stroke="#E4E4E4"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <transition name="fade">
            <svg
              v-if="search"
              class="clear-icon"
              @click="search = ''"
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="7.5"
                fill="white"
                stroke="#DBDBDB"
              />
              <path
                d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
                fill="#B5B5B5"
              />
            </svg>
          </transition>
          <input
            :style="{ outline: 'none' }"
            v-model="search"
            placeholder="Поиск"
            type="text"
          />
        </div>
      </div>
      <transition-group name="fade">
        <div key="first" class="sneakers" v-if="items && !search">
          <div
            v-for="item of items"
            :key="item.id"
            class="sneakers-item"
            :class="{ liked: item.liked }"
          >
            <transition-group name="like" appear>
              <div
                key="first"
                v-if="item.liked"
                @click="likeItem(item._id)"
                :style="{
                  position: 'absolute',
                  left: '30px',
                  top: '30px',
                  cursor: 'pointer',
                }"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="7" fill="#FEF0F0" />
                  <path
                    d="M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z"
                    fill="#FF8585"
                  />
                </svg>
              </div>
              <div
                key="second"
                v-else
                @click="likeItem(item._id)"
                :style="{
                  position: 'absolute',
                  left: '30px',
                  top: '30px',
                  cursor: 'pointer',
                }"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="6.5"
                    fill="white"
                    stroke="#F8F8F8"
                  />
                  <path
                    d="M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.756 12.0728 21.9429 12.5021C22.1365 12.9486 22.2347 13.4203 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3936 21.4543 15.417 21.469 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z"
                    stroke="#ECECEC"
                    stroke-width="1.4"
                  />
                </svg>
              </div>
            </transition-group>
            <div :style="{ width: '100%', height: '120px' }">
              <img
                width="100%"
                height="100%"
                :src="item.img"
                :style="{ objectFit: 'contain', maxWidth: '100%' }"
                @click="setTooltip({ show: true, item })"
              />
            </div>
            <p class="sneaker-name">{{ item.name }}</p>
            <div
              :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }"
            >
              <div>
                <p class="sneaker-price first">Цена:</p>
                <p class="sneaker-price second">{{ item.price }} руб.</p>
              </div>
              <transition name="fade" appear mode="out-in">
                <div
                  :style="{ cursor: 'pointer' }"
                  key="first'"
                  v-if="
                    !basket.items.find(
                      (basketItem) => basketItem.id === item.id
                    )
                  "
                  @click="addItemToCart(item._id)"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="7.5"
                      fill="white"
                      stroke="#9DD458"
                    />
                    <path
                      d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                      fill="#9DD458"
                    />
                  </svg>
                </div>
                <div
                  :style="{ cursor: 'pointer' }"
                  key="second"
                  v-else
                  @click="deleteItemBasket(item)"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="8"
                      fill="url(#paint0_linear)"
                    />
                    <g clip-path="url(#clipdavsdaewqceqwxewqe)">
                      <g filter="url(#filterVDASCD_Dsaad)">
                        <path
                          d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filterVDASCD_Dsaad"
                        x="10.6665"
                        y="11.3298"
                        width="10.6698"
                        height="10.5132"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear"
                        x1="16"
                        y1="0"
                        x2="16"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9DD458" />
                        <stop offset="1" stop-color="#3CC755" />
                      </linearGradient>
                      <clipPath id="clipdavsdaewqceqwxewqe">
                        <rect
                          width="10.6667"
                          height="10.6667"
                          fill="white"
                          transform="translate(10.6667 10.6667)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div key="second" v-else-if="filteredItems && !filteredItems.length">
          <p class="no-match">Совпадений не найдено</p>
        </div>
        <div key="third" class="sneakers" v-else-if="search">
          <div
            v-for="item of filteredItems"
            :key="item.id"
            class="sneakers-item"
            :class="{ liked: item.liked }"
          >
            <transition-group name="like" appear>
              <div
                key="first"
                v-if="item.liked"
                @click="likeItem(item._id)"
                :style="{
                  position: 'absolute',
                  left: '30px',
                  top: '30px',
                  cursor: 'pointer',
                }"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="7" fill="#FEF0F0" />
                  <path
                    d="M22.5849 12.2231C22.3615 11.7098 22.0394 11.2446 21.6365 10.8537C21.2333 10.4615 20.758 10.1499 20.2363 9.93576C19.6954 9.7128 19.1152 9.59868 18.5295 9.60002C17.7077 9.60002 16.906 9.82329 16.2092 10.245C16.0425 10.3459 15.8842 10.4567 15.7342 10.5775C15.5841 10.4567 15.4258 10.3459 15.2591 10.245C14.5624 9.82329 13.7606 9.60002 12.9388 9.60002C12.3471 9.60002 11.7737 9.71248 11.232 9.93576C10.7086 10.1508 10.2369 10.46 9.83181 10.8537C9.42843 11.2442 9.10619 11.7095 8.88337 12.2231C8.65168 12.7573 8.53333 13.3246 8.53333 13.9084C8.53333 14.4592 8.64668 15.0331 8.8717 15.6169C9.06006 16.1048 9.33009 16.6109 9.67513 17.122C10.2219 17.9307 10.9736 18.7742 11.9071 19.6293C13.4539 21.0467 14.9857 22.0258 15.0507 22.0655L15.4458 22.3169C15.6208 22.4277 15.8458 22.4277 16.0209 22.3169L16.4159 22.0655C16.4809 22.0242 18.0111 21.0467 19.5596 19.6293C20.493 18.7742 21.2448 17.9307 21.7915 17.122C22.1366 16.6109 22.4083 16.1048 22.5949 15.6169C22.82 15.0331 22.9333 14.4592 22.9333 13.9084C22.935 13.3246 22.8166 12.7573 22.5849 12.2231Z"
                    fill="#FF8585"
                  />
                </svg>
              </div>
              <div
                key="second"
                v-else
                @click="likeItem(item._id)"
                :style="{
                  position: 'absolute',
                  left: '30px',
                  top: '30px',
                  cursor: 'pointer',
                }"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="31"
                    height="31"
                    rx="6.5"
                    fill="white"
                    stroke="#F8F8F8"
                  />
                  <path
                    d="M21.149 11.356L21.1484 11.3554C20.8095 11.0258 20.4097 10.7636 19.9705 10.5833L19.9696 10.5829C19.5139 10.3951 19.0249 10.2989 18.5311 10.3L18.5295 10.3C17.8346 10.3 17.1584 10.4887 16.5717 10.8438L16.5717 10.8439C16.4313 10.9288 16.2985 11.0218 16.173 11.1228L15.7341 11.476L15.2953 11.1228C15.1698 11.0218 15.037 10.9288 14.8966 10.8439L14.8966 10.8438C14.3099 10.4887 13.6337 10.3 12.9388 10.3C12.4373 10.3 11.9546 10.395 11.4987 10.5829L11.498 10.5832C11.057 10.7644 10.6606 11.0243 10.3197 11.3556L10.3187 11.3566L10.3187 11.3566C9.98111 11.6834 9.71174 12.0725 9.52557 12.5016L21.149 11.356ZM21.149 11.356C21.4865 11.6835 21.756 12.0728 21.9429 12.5021C22.1365 12.9486 22.2347 13.4203 22.2333 13.9064V13.9084C22.2333 14.3625 22.1399 14.8512 21.9418 15.3651L21.9412 15.3667M21.149 11.356L21.9412 15.3667M12.3799 19.1131L12.38 19.1132C13.1291 19.7996 13.8773 20.3822 14.4475 20.7988C14.732 21.0066 14.9709 21.1721 15.1415 21.2873C15.2268 21.345 15.2948 21.3899 15.3428 21.4212C15.3936 21.4543 15.417 21.469 15.4155 21.468L15.4266 21.4748L15.4266 21.4749L15.7333 21.6701L16.0401 21.4749L16.0402 21.4748C16.0914 21.4423 17.5822 20.4902 19.0868 19.1131H12.3799ZM12.3799 19.1131C11.4753 18.2845 10.7634 17.4818 10.255 16.7299M12.3799 19.1131L10.255 16.7299M21.9412 15.3667C21.7771 15.7954 21.5328 16.2542 21.2114 16.7303M21.9412 15.3667L21.2114 16.7303M10.255 16.7299C9.93467 16.2553 9.69124 15.796 9.52486 15.3651L10.255 16.7299ZM21.2114 16.7303C20.7031 17.482 19.9913 18.2845 19.087 19.1129L21.2114 16.7303ZM9.23333 13.9084C9.23333 13.4208 9.33184 12.9483 9.52554 12.5017L9.52472 15.3648C9.32672 14.851 9.23333 14.3624 9.23333 13.9084Z"
                    stroke="#ECECEC"
                    stroke-width="1.4"
                  />
                </svg>
              </div>
            </transition-group>
            <div :style="{ width: '100%', height: '120px' }">
              <img
                width="100%"
                height="100%"
                :src="item.img"
                :style="{ objectFit: 'contain', maxWidth: '100%' }"
              />
            </div>
            <p class="sneaker-name">{{ item.name }}</p>
            <div
              :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }"
            >
              <div>
                <p class="sneaker-price first">Цена:</p>
                <p class="sneaker-price second">{{ item.price }} руб.</p>
              </div>
              <transition name="fade" appear mode="out-in">
                <div
                  :style="{ cursor: 'pointer' }"
                  key="first'"
                  v-if="
                    !basket.items.find(
                      (basketItem) => basketItem.id === item.id
                    )
                  "
                  @click="addItemToCart(item._id)"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="31"
                      height="31"
                      rx="7.5"
                      fill="white"
                      stroke="#9DD458"
                    />
                    <path
                      d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z"
                      fill="#9DD458"
                    />
                  </svg>
                </div>
                <div
                  :style="{ cursor: 'pointer' }"
                  key="second"
                  v-else
                  @click="deleteItemBasket(item)"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="32"
                      height="32"
                      rx="8"
                      fill="url(#paint0_linear)"
                    />
                    <g clip-path="url(#clipdavsdaewqceqwxewqe)">
                      <g filter="url(#filterVDASCD_Dsaad)">
                        <path
                          d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <filter
                        id="filterVDASCD_Dsaad"
                        x="10.6665"
                        y="11.3298"
                        width="10.6698"
                        height="10.5132"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy="2" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear"
                        x1="16"
                        y1="0"
                        x2="16"
                        y2="32"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9DD458" />
                        <stop offset="1" stop-color="#3CC755" />
                      </linearGradient>
                      <clipPath id="clipdavsdaewqceqwxewqe">
                        <rect
                          width="10.6667"
                          height="10.6667"
                          fill="white"
                          transform="translate(10.6667 10.6667)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div key="four" class="sneakers" v-else>
          <div
            v-for="(item, index) of 8"
            :key="index"
            class="sneakers-item preloader"
          >
            <div class="preloader-photo"></div>
            <div class="preloader-title"></div>
            <div class="preloader-text"></div>
            <div class="preloader-price"></div>
          </div>
        </div>
      </transition-group>
    </div>
    <transition name="arrow">
      <svg
        @click="scrollTop"
        v-if="pageY"
        class="arrow-up"
        width="60"
        height="60"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="42" cy="38" r="38" fill="#DDF3FF" />
          <circle cx="42" cy="38" r="37.5" stroke="#7AB3E6" />
        </g>
        <path
          d="M25.5575 33.5787L42.0168 15.826C42.4242 15.3866 43.124 15.4017 43.5121 15.8583L58.5997 33.611C59.1517 34.2605 58.6901 35.2586 57.8378 35.2586H50.8261C50.2738 35.2586 49.8261 35.7063 49.8261 36.2586V61C49.8261 61.5523 49.3784 62 48.8261 62H35.1739C34.6216 62 34.1739 61.5523 34.1739 61V36.2586C34.1739 35.7063 33.7262 35.2586 33.1739 35.2586H26.2908C25.418 35.2586 24.9641 34.2188 25.5575 33.5787Z"
          fill="#98CCFA"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="84"
            height="84"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.234201 0 0 0 0 0.423448 0 0 0 0 0.591667 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </transition>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";

export default {
  name: "Shop",
  data: () => ({
    search: "",
    pageY: false,
    swiperOption: {
      spaceBetween: 30,
    },
  }),
  methods: {
    ...mapMutations([
      "setShowBasket",
      "setItemBasket",
      "deleteItemBasket",
      "setItems",
      "setTooltip",
    ]),
    scrollTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    addItemToCart(id) {
      if (this.basket.items.find((item) => item._id === id)) return;
      this.setItemBasket(this.items.find((item) => item._id === id));
    },
    async likeItem(id) {
      let item = this.items.find((item) => item._id === id);
      if (!item.liked) {
        this.$axios
          .post("sneakers/like", { id })
          .then((res) => {
            console.log(res, "liked");
            item.liked = true;
          })
          .catch((e) => console.log(e));
      } else {
        this.$axios
          .post("sneakers/unlike", { id })
          .then((res) => {
            console.log(res, "unliked");
            item.liked = false;
          })
          .catch((e) => console.log(e));
      }
    },
  },
  computed: {
    ...mapGetters(["basket", "user", "items"]),
    filteredItems() {
      if (!this.items) return;
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    cartPrice() {
      let initValue = 0;
      const reducer = (accumulator, item) => accumulator + item.price;
      return this.basket.items.reduce(reducer, initValue);
    },
  },
  mounted() {
    if (!this.items) {
      setTimeout(() => {
        this.$axios.get("/sneakers").then((res) => {
          this.setItems(
            res.data.map((item) => ({
              ...item,
              liked: this.user.favorites.includes(item._id),
            }))
          );
        });
      }, 1500);
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        this.pageY = true;
      } else this.pageY = false;
    });
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/style";
.swiper-slide {
  transition: all 0.4s 0.2s;
  transform: scaleY(90%);
  border-radius: 20px;
  &-prev {
    box-shadow: 8px 7px 8px 0px rgba(34, 60, 80, 0.1);
  }
  &-active {
    transform: scaleY(100%);
  }
  &-next {
    box-shadow: -7px -1px 8px 0px rgba(34, 60, 80, 0.1);
  }
}
.slide-item {
  height: 300px;
  background: #f4efe9;
  border-radius: 20px;
  padding: 20px 16px;
  background-repeat: no-repeat;
  & .slider-btn:hover {
    box-shadow: 3px 3px 22px -12px rgba(34, 60, 80, 0.8);
  }
  &.first {
    display: flex;
    justify-content: space-between;
    padding: 0;
    @media (max-width: $mobile) {
      overflow: hidden;
    }
  }

  &.second {
    background-image: url("../../assets/slide2.jpg");
    background-size: cover;
  }

  &.third {
    background-image: url("../../assets/slide3.jpg");
    background-position: right 35% bottom 40%;
    background-size: cover;
  }

  @media (max-width: $mobile) {
    height: 150px;
  }
}
.sneakers-wrapper {
  margin: 40px 0 0;
  position: relative;
  min-height: 700px;
  .no-match {
    position: absolute;
    top: 50px;
    @media (max-width: $mobile) {
      top: 100px;
    }
  }
  .sneakers-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      & input {
        padding: 0 0 0 40px;
        height: 45px;
        border: 1px solid $main-color;
        border-radius: 10px;
      }
      & svg {
        position: absolute;
      }
      .search-icon {
        left: 18px;
        & path,
        rect {
          transition: 0.3s;
        }
      }
      .clear-icon {
        right: 10px;
        cursor: pointer;
        &:hover path {
          fill: red;
        }
        &:hover rect {
          stroke: red;
        }
      }
    }
    @media (max-width: $mobile) {
      flex-direction: column;
      align-items: flex-start;
      .input-wrapper {
        margin-top: 10px;
      }
    }
  }
  .sneakers {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item {
      width: 210px;
      height: 260px;
      margin-top: 40px;
      border: 1px solid $main-color;
      border-radius: 40px;
      transition: all 0.4s ease;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      &.liked {
        transform: translateY(-10px);
        box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
      }
      &.preloader {
        &::before {
          content: "";
          width: 5px;
          height: 100%;
          background: #ffffff;
          position: absolute;
          left: 0;
          animation: preloader infinite linear 1s;
        }
        overflow: hidden;
        position: relative;
        justify-content: flex-start;
        align-items: flex-start;
        .preloader-photo {
          height: 91px;
          width: 100%;
          border-radius: 10px;
          background: #f2f2f2;
        }
        .preloader-title {
          height: 15px;
          width: 100%;
          background: #f2f2f2;
          border-radius: 5px;
          margin-top: 15px;
        }
        .preloader-text {
          margin-top: 5px;
          height: 15px;
          width: 75%;
          background: #f2f2f2;
          border-radius: 5px;
        }
        .preloader-price {
          margin-top: 15px;
          height: 20px;
          width: 50%;
          background: #f2f2f2;
          border-radius: 5px;
        }
      }
      .sneaker-name {
        font-size: $four-font;
        margin: 14px 0;
        font-weight: 400;
      }
      .sneaker-price.first {
        font-weight: normal;
      }
      .sneaker-price.second {
        margin-top: 2.5px;
        font-weight: bolder;
      }
      @media (max-width: $mobile) {
        width: 150px;
        height: 150px;
      }
    }
    @media (max-width: $mobile) {
      justify-content: space-around;
    }
  }
}
.arrow-up {
  position: fixed;
  bottom: 50px;
  right: 100px;
  cursor: pointer;
  @media (max-width: $mobile) {
    bottom: 10px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
}
.like-enter-active,
.like-leave-active {
  transition: all 0.5s 0.3s;
}
.like-enter, .like-leave-to /* .like-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.arrow-enter-active,
.arrow-leave-active {
  transition: all 0.3s;
}
.arrow-enter, .arrow-leave-to /* .arrow-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(-25px);
}
@keyframes preloader {
  0% {
    left: 0%;
  }
  100% {
    left: 100%;
  }
}
</style>
