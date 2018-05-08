<?php namespace Meral\Setup\Components;

use Cms\Classes\ComponentBase;
use Meral\Setup\Models\Bookingmodel;

class Showstatistic extends ComponentBase
{
    public function componentDetails()
    {
        return [
            'name' => 'showstatistic Component',
            'description' => 'No description provided yet...'
        ];
    }

    public function getInfo()
    {
        $bookingsAmount = Bookingmodel::orderBy('id', 'desc')->get()->count();
        $bookingCategory = null;
        /*
         * array of category names
         */
        $bookingCategory = Bookingmodel::select('apptype')
            ->distinct()
            ->limit(5)
            ->get()
            ->toArray();
        $countBooksInCategory = []; //count books for one category

        foreach ($bookingCategory as $key => $booking) {
            $countBooksInCategory[$key]['name'] = $booking['apptype'];
            $countBooksInCategory[$key]['count'] = Bookingmodel::select('apptype')
                ->where('apptype', $booking['apptype'])
                ->get()
                ->count();
        }

        foreach ($countBooksInCategory as $key => $bookCount) {
            $countBooksInCategory[$key]['percent'] = $this->getPercentForCategory($bookCount, $bookingsAmount);
        }
        
        return $countBooksInCategory;
    }

    public function getPercentForCategory($category, $bookingsAmount)
    {
        $categoryAmount = $bookingsAmount;
        $percent = ($category['count'] / $categoryAmount) * 100;

        return round($percent);
    }

    public function defineProperties()
    {
        return [];
    }
}
