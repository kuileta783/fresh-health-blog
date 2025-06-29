"use client"

import { useState } from "react"
import { Filter, SortDesc, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface CategoryFilterProps {
  subcategories: string[]
  onSubcategoryChange: (subcategory: string | null) => void
  onSortChange: (sort: string) => void
  onViewChange: (view: 'grid' | 'list') => void
  selectedSubcategory: string | null
  currentSort: string
  currentView: 'grid' | 'list'
  productCount: number
}

export default function CategoryFilter({
  subcategories,
  onSubcategoryChange,
  onSortChange,
  onViewChange,
  selectedSubcategory,
  currentSort,
  currentView,
  productCount
}: CategoryFilterProps) {
  const [showAllFilters, setShowAllFilters] = useState(false)

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "rating", label: "Highest Rated" },
    { value: "popular", label: "Most Popular" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" }
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Filters & Sort
          </h3>
          <span className="text-sm text-gray-500">
            {productCount} products found
          </span>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant={currentView === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onViewChange('grid')}
          >
            <Grid className="w-4 h-4" />
          </Button>
          <Button
            variant={currentView === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onViewChange('list')}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {/* All Categories */}
        <Button
          variant={selectedSubcategory === null ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSubcategoryChange(null)}
          className="h-8"
        >
          All
        </Button>

        {/* Subcategory Filters */}
        {subcategories.slice(0, showAllFilters ? undefined : 4).map((subcategory) => (
          <Button
            key={subcategory}
            variant={selectedSubcategory === subcategory ? 'default' : 'outline'}
            size="sm"
            onClick={() => onSubcategoryChange(subcategory)}
            className="h-8"
          >
            {subcategory}
          </Button>
        ))}

        {subcategories.length > 4 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="h-8 text-green-600"
          >
            {showAllFilters ? 'Show Less' : `+${subcategories.length - 4} More`}
          </Button>
        )}
      </div>

      {/* Sort and Advanced Options */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <SortDesc className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          <Select value={currentSort} onValueChange={onSortChange}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Active Filter Tags */}
        {selectedSubcategory && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Active filters:</span>
            <Badge
              variant="secondary"
              className="cursor-pointer hover:bg-gray-300"
              onClick={() => onSubcategoryChange(null)}
            >
              {selectedSubcategory} ×
            </Badge>
          </div>
        )}

        {/* Clear All */}
        {selectedSubcategory && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onSubcategoryChange(null)}
            className="text-red-600 hover:text-red-700"
          >
            Clear All
          </Button>
        )}
      </div>
    </div>
  )
}
