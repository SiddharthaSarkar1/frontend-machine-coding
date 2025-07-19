# Pagination

In this we are using a pattern called render prop pattern. Where via functions thru props we can do child to parent communication. Many popular libraries uses this pattern like for virtualization, infinite scroll etc.

logic

1,2,3,4,5 => 

Page Size = 2
Number of pages = 3  ==>> 5/2 = 2.5 Math.ceil(2.5) = 3
current page = 2
start index = 2  ==> (2-1) * 2 = 2
end index = 4