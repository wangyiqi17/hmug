import fly from '@/utils/request.js'

export const getBanners = () => fly.get('/home/swiperdata')

export const getNavs = () => fly.get('/home/catitems')

export const getFloorList = () => fly.get('/home/floordata')
