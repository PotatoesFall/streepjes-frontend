import { createStore } from "vuex"

import {
    Club,
    Category,
    Product,
    Price,
    Member,
    MemberList,
    Order,
} from "@/type/type"

interface MyStore {
    categories: Category[]
    products: Product[]
    members: MemberList

    selectedClub: Club
    selectedMember: Member
    currentOrder: Order
}

export default createStore({
    state(): MyStore {
        return {
            categories: [],
            products: [],
            members: new MemberList([
                {
                    id: 1,
                    club: Club.Gladiators,
                    name: "Marty",
                    debt: new Price(10000),
                },
                {
                    id: 2,
                    club: Club.Gladiators,
                    name: "Ritten",
                    debt: new Price(1234),
                },
                {
                    id: 3,
                    club: Club.Parabool,
                    name: "Nynke",
                    debt: new Price(20000),
                },
                {
                    id: 4,
                    club: Club.Parabool,
                    name: "Vincent",
                    debt: new Price(0),
                },
                {
                    id: 5,
                    club: Club.Parabool,
                    name: "Sven",
                    debt: new Price(42069),
                },
            ]),
            selectedClub: Club.Parabool,
            selectedMember: {
                id: 0,
                club: Club.Unknown,
                name: "",
                debt: new Price(0),
            },
            currentOrder: new Order(Club.Unknown),
        }
    },
    getters: {
        club(state: MyStore): Club {
            return state.selectedClub
        },
        categories(state: MyStore): Category[] {
            return state.categories
        },
        products(state: MyStore): Product[] {
            return state.products
        },
        members(state: MyStore): Member[] {
            return state.members.getByClub(state.selectedClub)
        },
        isClubChosen(state: MyStore): boolean {
            return state.selectedClub != Club.Unknown
        },
        order(state: MyStore): Order {
            return state.currentOrder
        },
    },
    mutations: {
        setClub(state: MyStore, club: Club) {
            state.selectedClub = club
        },
        selectMember(state: MyStore, member: Member) {
            state.selectedMember = member
        },
        setCategories(state: MyStore, categories: Category[]) {
            state.categories = categories
        },
        setProducts(state: MyStore, products: Product[]) {
            state.products = products
        },
    },
    actions: {},
    modules: {},
})
